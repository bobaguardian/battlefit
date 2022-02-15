from app.models import db, Log


def seed_logs():
    log1 = Log(user_id=2, exercise_id=1, unit_id=1, unit_count=10, comment="This was so hard!")
    log2 = Log(user_id=2, exercise_id=5, unit_id=3, unit_count=35, comment="Getting my cardio game back on!")


    db.session.add(log1)
    db.session.add(log2)


    db.session.commit()


def undo_logs():
    db.session.execute('TRUNCATE logs RESTART IDENTITY CASCADE;')
    db.session.commit()
