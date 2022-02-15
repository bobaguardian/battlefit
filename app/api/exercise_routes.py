from flask import Blueprint, jsonify
from flask_login import current_user
from app.models import Exercise


exercise_routes = Blueprint('exercises', __name__)


@exercise_routes.route('/')
def get_all_exercises():
    exercises = Exercise.query.all()
    return {'exercises': [exercise.to_dict() for exercise in exercises]}


@exercise_routes.route('/', methods=["POST"])
def add_exercise():
    pass
