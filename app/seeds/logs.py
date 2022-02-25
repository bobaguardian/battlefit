from datetime import datetime
from app.models import db, Log


def seed_logs():
    log1 = Log(user_id=2, exercise_id=1, unit_id=1, unit_count=20, comment="This was so hard!", date=datetime(2022, 2, 22))
    log2 = Log(user_id=2, exercise_id=5, unit_id=2, unit_count=35, comment="3 sets of 8. Getting my cardio game back on!", date=datetime(2022, 2, 14))


    db.session.add(log1)
    db.session.add(log2)


    db.session.commit()


def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
