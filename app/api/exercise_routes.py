from flask import Blueprint, request
from flask_login import current_user
from datetime import datetime
from app.models import db, Exercise, MuscleGroup
from app.forms import ExerciseForm


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


@exercise_routes.route('/')
def get_all_exercises():
    exercises = Exercise.query.all()
    return {'exercises': [exercise.to_dict() for exercise in exercises]}


@exercise_routes.route('/', methods=["POST"])
def add_exercise():
    form = ExerciseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id
        exercise = Exercise(
            user_id = current_user.get_id(),
            muscle_group_id = muscle_group_id,
            name = form.data['name'],
            description = form.data['description'],
            image = form.data['image']
        )

        db.session.add(exercise)
        db.session.commit()

        return {"exercise": exercise.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@exercise_routes.route('/<int:exerciseId>', methods=["PUT"])
def edit_exercise(exerciseId):
    form = ExerciseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        muscle_group_id = MuscleGroup.query.filter(MuscleGroup.name == form.data['muscle_group']).first().id
        exercise = Exercise.query.get(int(exerciseId))
        print("BACKEND ROUTE", exercise.to_dict())
        exercise.muscle_group_id = muscle_group_id
        exercise.name = form.data['name']
        exercise.description = form.data['description']
        exercise.image = form.data['image']
        exercise.updated_at = datetime.now()

        db.session.commit()

        return {"exercise": exercise.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@exercise_routes.route('/<int:exerciseId>', methods=["DELETE"])
def delete_exercise(exerciseId):
    exercise = Exercise.query.get(int(exerciseId))
    if not exercise:
        return {'errors': ['Exercise not found']}, 401
    if exercise.user_id == int(current_user.get_id()):
        db.session.delete(exercise)
        db.session.commit()
        return {'message': 'successfully deleted'}
    print("USER IDs", exercise.user_id, current_user.get_id())
    return {'errors': ["You can't delete an exercise you don't own"]}, 401


@exercise_routes.route('/<string:muscle_name>')
def get_exercises_by_muscle_group(muscle_name):
    muscle_name = muscle_name.capitalize()
    muscle_group = MuscleGroup.query.filter(MuscleGroup.name == muscle_name).first()
    if not muscle_group:
        return {'errors': ['Muscle group not found.']}, 401;
    exercises = Exercise.query.filter(Exercise.muscle_group == muscle_group).all()
    return {'exercises': [exercise.to_dict() for exercise in exercises]}
