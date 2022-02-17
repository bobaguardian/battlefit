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

def name_is_unique(form, field):
    name = field.data
    exercise = Exercise.query.filter(Exercise.name == name).first()
    if exercise:
        raise ValidationError("Exercise name already exists.")

class ExerciseForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), name_within_length, name_is_unique])
    # muscle_group = SelectField("muscle-group", choices=[muscle.name for muscle in MuscleGroup.query.all()])
    muscle_group = StringField('muscle-group', validators=[DataRequired(), muscle_group_exists])
    description = TextAreaField('description')
    image = FileField("image")
