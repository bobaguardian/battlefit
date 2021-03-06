from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.aws_s3 import upload_file_to_s3, allowed_file, get_unique_filename
from app.models import db, User
from app.forms import UploadImage

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field}: {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/exercises')
@login_required
def get_user_exercises(id):
    user = User.query.get(int(id))
    if user:
        return {"exercises": [exercise.to_dict() for exercise in user.exercises]}
    return {"errors": ["This user does not exist"]}, 401

@user_routes.route('/<int:id>', methods=["PUT"])
@login_required
def updateUserImage(id):
    user = User.query.get(id)
    form = UploadImage()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form["image"].data:
        image = form["image"].data
        if not allowed_file(image.filename):
            return {"errors": "file type not allowed"}, 400
        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)

        if "url" not in upload:
            return upload, 400

        url = upload["url"]
        if form.validate_on_submit():
            user.image=url
            db.session.add(user)
            db.session.commit()
            return user.to_dict()

    else :
        return user.to_dict() # no change to user image
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
