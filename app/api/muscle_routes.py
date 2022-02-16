from flask import Blueprint, request
from flask_login import current_user
from datetime import datetime
from app.models import db, MuscleGroup


muscle_routes = Blueprint('muscles', __name__)

@muscle_routes.route('/')
def get_all_muscles():
    muscles = MuscleGroup.query.all()
    return {'muscles': [muscle.to_dict() for muscle in muscles]}
