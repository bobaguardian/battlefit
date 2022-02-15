from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, FileField
from wtforms.validators import DataRequired, ValidationError
from app.models import MuscleGroup

def muscle_group_exists(form, field):
    muscle_name = field.data
    muscle_group = MuscleGroup.query.filter(MuscleGroup.name == muscle_name).first()
    if not muscle_group:
        raise ValidationError("Muscle group specified doesn't exist in the database.")

class ExerciseForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    # muscle_group = SelectField("muscle-group", choices=[muscle.name for muscle in MuscleGroup.query.all()])
    muscle_group = StringField('muscle-group', validators=[DataRequired(), muscle_group_exists])
    description = TextAreaField('description')
    image = FileField("image")
