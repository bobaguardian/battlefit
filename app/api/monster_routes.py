from flask import Blueprint
from app.models import db, Monster

monster_routes = Blueprint('monsters', __name__)

@monster_routes.route('/')
def get_all_exercises():
    monsters = Monster.query.all()
    return {'monsters': [monster.to_dict() for monster in monsters]}
