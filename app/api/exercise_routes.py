from flask import Blueprint, request, jsonify, session
from flask_login import current_user, login_required
from datetime import datetime
from app.aws_s3 import upload_file_to_s3, allowed_file, get_unique_filename
from app.models import db, Exercise, MuscleGroup
from app.forms import AddExerciseForm, EditExerciseForm


exercise_routes = Blueprint('exercises', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field}: {error}')
    return errorMessages


def name_is_unique(name):
    return Exercise.query.filter(Exercise.name == name).first()

@exercise_routes.route('/')
def get_all_exercises():
    exercises = Exercise.query.all()
    return {'exercises': [exercise.to_dict() for exercise in exercises]}


@exercise_routes.route('/', methods=["POST"])
@login_required
def add_exercise():
    form = AddExerciseForm()
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
            muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id

            exercise = Exercise(
                user_id = current_user.get_id(),
                muscle_group_id = muscle_group_id,
                name = form.data['name'],
                description = form.data['description'],
                image = url
            )

            db.session.add(exercise)
            db.session.commit()
            return {"exercise": exercise.to_dict()}

    else :

        if form.validate_on_submit():
            muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id
            exercise = Exercise(
                user_id = current_user.get_id(),
                muscle_group_id = muscle_group_id,
                name = form.data['name'],
                description = form.data['description'],
                image = "https://battle-fit.s3.amazonaws.com/3fbe7a6b56934db4aa272cf79aafb999.jpg"
            )

            db.session.add(exercise)
            db.session.commit()

            return {"exercise": exercise.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@exercise_routes.route('/<int:exerciseId>', methods=["PUT"])
@login_required
def edit_exercise(exerciseId):
    form = EditExerciseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # if editing exercise and didn't change name, don't throw an error
    # if name changed (and is different from original name), check if name is unique


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
            muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id
            exercise = Exercise.query.get(int(exerciseId))
            exercise.muscle_group_id = muscle_group_id

            check_exercise = name_is_unique(form["name"].data)
            if check_exercise and check_exercise.id != exercise.id:
                return {"errors": ["name: Exercise name already exists."]}, 401

            exercise.name = form.data['name']
            exercise.description = form.data['description']
            exercise.image = url
            exercise.updated_at = datetime.now()

            db.session.commit()

            return {"exercise": exercise.to_dict()}
    else:
        if form.validate_on_submit():
            muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id
            exercise = Exercise.query.get(int(exerciseId))
            exercise.muscle_group_id = muscle_group_id

            check_exercise = name_is_unique(form["name"].data)
            if check_exercise and check_exercise.id != exercise.id:
                return {"errors": ["name: Exercise name already exists."]}, 401

            exercise.name = form.data['name']
            exercise.description = form.data['description']
            exercise.updated_at = datetime.now()

            db.session.commit()

            return {"exercise": exercise.to_dict()}

    print(validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@exercise_routes.route('/<int:exerciseId>', methods=["DELETE"])
@login_required
def delete_exercise(exerciseId):
    exercise = Exercise.query.get(int(exerciseId))
    if not exercise:
        return {'errors': ['Exercise not found']}, 401
    if exercise.user_id == int(current_user.get_id()):
        db.session.delete(exercise)
        db.session.commit()
        return {'success': 'exercise deleted'}
    return {'errors': ["You can't delete an exercise you don't own"]}, 401


@exercise_routes.route('/<string:muscle_name>')
def get_exercises_by_muscle_group(muscle_name):
    muscle_name = muscle_name.capitalize()
    muscle_group = MuscleGroup.query.filter(MuscleGroup.name == muscle_name).first()
    if not muscle_group:
        return {'errors': ['Muscle group not found.']}, 401;
    exercises = Exercise.query.filter(Exercise.muscle_group == muscle_group).all()
    return {'exercises': [exercise.to_dict() for exercise in exercises]}
