from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField
from wtforms.validators import DataRequired, ValidationError
from app.models import MuscleGroup, Exercise

def muscle_group_exists(form, field):
    muscle_name = field.data
    muscle_group = MuscleGroup.query.filter(MuscleGroup.name == muscle_name).first()
    if not muscle_group:
        raise ValidationError("Muscle group specified doesn't exist in the database.")

def name_within_length(form, field):
    name = field.data
    if len(name) > 100:
        raise ValidationError("Exercise name must be less than 100 characters.")


class EditExerciseForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), name_within_length])
    muscle_group = StringField('muscle-group', validators=[DataRequired(), muscle_group_exists])
    description = TextAreaField('description')
    image = FileField("image")
