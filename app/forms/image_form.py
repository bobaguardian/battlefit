from flask_wtf import FlaskForm
from wtforms import FileField


class UploadImage(FlaskForm):
    image = FileField("image")
