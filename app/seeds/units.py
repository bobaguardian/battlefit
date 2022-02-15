from app.models import db, Unit


# Adds a demo user, you can add other users here if you want
def seed_units():
    unit1 = Unit(name="Reps")
    unit2 = Unit(name="Weight")
    unit3 = Unit(name="Time")
    unit4 = Unit(name="Distance")
    unit5 = Unit(name="Calories")


    db.session.add(unit1)
    db.session.add(unit2)
    db.session.add(unit3)
    db.session.add(unit4)
    db.session.add(unit5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_units():
    db.session.execute('TRUNCATE units RESTART IDENTITY CASCADE;')
    db.session.commit()
