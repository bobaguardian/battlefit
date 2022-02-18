from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Unit, Exercise, Log

def unit_exists(form, field):
    unit_id = field.data
    unit = Unit.query.filter(Unit.id == unit_id).first()
    if not unit:
        raise ValidationError("Unit specified doesn't exist.")

def exercise_exists(form, field):
    exercise_id = field.data
    exercise = Exercise.query.filter(Exercise.id == exercise_id).first()
    if not exercise:
        raise ValidationError("Exercise specified doesn't exist.")

class LogForm(FlaskForm):
    date = DateField("date", validators=[DataRequired()])
    exercise_id = IntegerField('exercise_id', validators=[DataRequired(), exercise_exists])
    unit_id = IntegerField('unit_id', validators=[DataRequired(), unit_exists])
    unit_count = IntegerField('unit_id', validators=[DataRequired()])
    comment = TextAreaField('description')
