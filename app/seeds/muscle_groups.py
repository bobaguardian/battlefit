from app.models import db, MuscleGroup


# Adds a demo user, you can add other users here if you want
def seed_muscle_groups():
    ms1 = MuscleGroup(name="Abs")
    ms2 = MuscleGroup(name="Back")
    ms3 = MuscleGroup(name="Biceps")
    ms4 = MuscleGroup(name="Calves")
    ms5 = MuscleGroup(name="Cardio")
    ms6 = MuscleGroup(name="Chest")
    ms7 = MuscleGroup(name="Forearms")
    ms8 = MuscleGroup(name="Glutes")
    ms9 = MuscleGroup(name="Legs")
    ms10 = MuscleGroup(name="Shoulders")
    ms11 = MuscleGroup(name="Triceps")
    ms12 = MuscleGroup(name="Other")

    db.session.add(ms1)
    db.session.add(ms2)
    db.session.add(ms3)
    db.session.add(ms4)
    db.session.add(ms5)
    db.session.add(ms6)
    db.session.add(ms7)
    db.session.add(ms8)
    db.session.add(ms9)
    db.session.add(ms10)
    db.session.add(ms11)
    db.session.add(ms12)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_muscle_groups():
    db.session.execute('TRUNCATE muscle_groups RESTART IDENTITY CASCADE;')
    db.session.commit()
