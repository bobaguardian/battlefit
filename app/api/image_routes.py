# This is a helper API route to upload images to
# the AWS S3 bucket for Battle Fit

from flask import Blueprint, jsonify, session, request
from app.aws_s3 import upload_file_to_s3, allowed_file, get_unique_filename
from app.forms import UploadImage

image_routes = Blueprint('images', __name__)

@image_routes.route('/', methods=['POST'])
def upload_image_to_bucket():
    form = UploadImage()
    form['csrf_token'].data = request.cookies['csrf_token']
    image = form["image"].data
    if not allowed_file(image.filename):
        return {"errors": "file type not allowed"}, 400
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]
    if form.validate_on_submit():
        print("IMAGE URL", url)
        return {"sucess": url}
    return {'errors': "image failed to upload"}, 401
