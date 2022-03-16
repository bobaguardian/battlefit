from flask import Blueprint, request
import random
from datetime import datetime
from flask_login import login_required, current_user
from app.models import db, Exercise, Monster, Battle
from app.forms import BattleDateForm

battle_routes = Blueprint('battles', __name__)


level_converter = {
    1: 2,
    2: 4,
    3: 6
}

@battle_routes.route('/', methods=["POST"])
@login_required
def add_battle():
    # CREATE a battle with a random monster

    today =  request.get_json()["date"].split('T')[0]
    random_monster = random.choice(Monster.query.all())
    new_battle = Battle(
        user_id = current_user.get_id(),
        monster_id = random_monster.id,
        date = today,
        defeated = False
    )
    db.session.add(new_battle)
    db.session.commit()

    # Generate random unique exercises
    # Right now only includes the default ids 1-23, TO DO: add user's exercises too
    exercise_list = Exercise.query.filter(Exercise.id > 0).filter(Exercise.id < 24).all()
    exercise_list.extend(Exercise.query.filter(Exercise.user_id == current_user.get_id()).all())
    exercises = random.sample(exercise_list, level_converter[new_battle.monster.level])
    for e in exercises:
        new_battle.exercises.append(e)


    db.session.commit()


    return {"battle": new_battle.to_dict()}


@battle_routes.route('/<int:battle_id>/exercises/<int:exercise_id>', methods=["DELETE"])
@login_required
def remove_battle_exercise(battle_id, exercise_id):
    current_battle = Battle.query.get(int(battle_id))
    if current_battle and current_battle.user_id == int(current_user.get_id()):
    # update exercises to be all but the exercise with exercise_id
        current_battle.exercises = [e for e in current_battle.exercises if e.id != exercise_id]
        db.session.commit()
        return {'battle': current_battle.to_dict()}

    return {'errors': ["Either a battle with that id doesn't exist or you are not part of this battle."]}, 401




@battle_routes.route('/<int:battle_id>', methods=["PUT"])
@login_required
def update_battle_victory(battle_id):
    current_battle = Battle.query.get(int(battle_id))
    if current_battle and current_battle.user_id == int(current_user.get_id()):
        # if current_battle.defeated:
        #     return {'errors': ["You have already won this battle"]}, 401

        current_battle.defeated = True
        db.session.commit()
        return {'battle': current_battle.to_dict()}

    return {'errors': ["Either a battle with that id doesn't exist or you are not part of this battle."]}, 401



# HELPER API ROUTE
@battle_routes.route('/generate_exercises/<int:num_exercises>')
def generateExercises(num_exercises):
    # Generates random num_exercises from default seeders
    #  and current user's exercises
    exercise_list = Exercise.query.filter(Exercise.id > 0).filter(Exercise.id < 24).all()

    exercises = random.sample(exercise_list, num_exercises)
    return {"exercises": [exercise.to_dict() for exercise in exercises]}
