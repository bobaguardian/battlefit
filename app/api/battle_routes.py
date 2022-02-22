from flask import Blueprint
import random
from datetime import datetime
from flask_login import login_required, current_user
from app.models import db, Exercise, Monster, Battle

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
    random_monster = random.choice(Monster.query.all())
    new_battle = Battle(
        user_id = current_user.get_id(),
        monster_id = random_monster.id,
        date = datetime.now().date(),
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


@battle_routes.route('/generate_exercises/<int:num_exercises>')
@login_required
def generateExercises(num_exercises):
    # Generates random num_exercises from default seeders
    #  and current user's exercises
    exercise_list = Exercise.query.filter(Exercise.id > 0).filter(Exercise.id < 24).all()

    exercises = random.sample(exercise_list, num_exercises)
    print("**********Random exercises", [exercise.name for exercise in exercises])
    return {"exercises": [exercise.to_dict() for exercise in exercises]}
