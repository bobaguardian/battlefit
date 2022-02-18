from flask import Blueprint, request
from flask_login import current_user, login_required
from datetime import datetime
from app.models import db, Log
from app.forms import LogForm

log_routes = Blueprint('logs', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field}: {error}')
    return errorMessages

@log_routes.route('/')
@login_required
def get_user_logs():
    logs = Log.query.filter(Log.user_id == int(current_user.get_id())).order_by(Log.date).all()
    return {"logs": [log.to_dict() for log in logs]}


@log_routes.route('/', methods=["POST"])
def add_log():
    form = LogForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        log = Log(
            user_id = current_user.get_id(),
            exercise_id=form.data["exercise_id"],
            unit_id=form.data["unit_id"],
            unit_count=form.data["unit_count"],
            comment=form.data["comment"],
            date=form.data["date"]
        )
        db.session.add(log)
        db.session.commit()

        return {"log": log.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@log_routes.route('/<int:id>', methods=["PUT"])
def edit_log(id):
    form = LogForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        log = Log.query.get(int(id))
        log.date = form.data['date']
        log.unit_id= form.data['unit_id']
        log.unit_count = form.data['unit_count']
        log.comment = form.data['comment']
        log.updated_at = datetime.now()
        db.session.commit()
        return {'log': log.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@log_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_log(id):
    log = Log.query.get(int(id))
    if not log:
        return {'errors': ['Log not found']}, 401
    if log.user_id == int(current_user.get_id()):
        db.session.delete(log)
        db.session.commit()
        return {'success': 'log deleted'}
    return {'errors': ["You can't delete a log you don't own"]}, 401
