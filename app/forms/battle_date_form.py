from flask_wtf import FlaskForm
from wtforms import DateField

class BattleDateForm(FlaskForm):
    date = DateField("date")
