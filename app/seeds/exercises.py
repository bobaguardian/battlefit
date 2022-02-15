from app.models import db, Exercise


def seed_exercises():
    # Abs
    # crunch = Exercise()

    # Back

    # Biceps

    # Calves

    # Cardio

    # Chest

    # Forearms

    # Glutes

    # Legs

    # Shoulders

    # Triceps

    # Other

    db.session.commit()


def undo_exercises():
    db.session.execute('TRUNCATE exercises RESTART IDENTITY CASCADE;')
    db.session.commit()
