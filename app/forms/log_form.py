from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Unit, Exercise, Log


def unit_exists(form, field):
    unit_id = field.data
    unit = Unit.query.filter(Unit.id == unit_id).first()
    if not unit:
        raise ValidationError("Unit specified doesn't exist.")

# TO DO IMPLEMENT THIS SO U CAN"T SPECIFY A FUTURE DATE
def not_in_future(form, field):
    date = field.data
    current = datetime.now()
    if (date.year > current.year) or (date.year == current.year and date.month > current.month) or (date.year == current.year and date.month == current.month and date.day > current.day):
        raise ValidationError("Date cannot be in the future.")


class LogForm(FlaskForm):
    date = DateField("date", validators=[DataRequired(), not_in_future])
    exercise_id = IntegerField('exercise_id')
    unit_id = IntegerField('unit_id', validators=[DataRequired(), unit_exists])
    unit_count = IntegerField('unit_id', validators=[DataRequired()])
    comment = TextAreaField('description')
