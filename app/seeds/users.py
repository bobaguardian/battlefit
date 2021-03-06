from app.models import db, User
from app.seeds.battles import seed_battles
from app.seeds.logs import seed_logs


# Adds a demo user, you can add other users here if you want
def seed_users():
    admin = User(username="Admin", email="admin@gmail.com", password='pantspeople',
        image="https://battle-fit.s3.us-west-1.amazonaws.com/5bbcef95484347d8b026bad7218aca08.png")
    demo = User(
        username='deMOUSEr', email='demouser@aa.io', password='password',
        image="https://battle-fit.s3.us-west-1.amazonaws.com/5bbcef95484347d8b026bad7218aca08.png")

    db.session.add(admin)
    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

def seed_demo():
    demo = User(
        username='deMOUSEr', email='demouser@aa.io', password='password',
        image="https://battle-fit.s3.us-west-1.amazonaws.com/5bbcef95484347d8b026bad7218aca08.png")

    db.session.add(demo)
    db.session.commit()
    seed_battles(demo.id)
    seed_logs(demo.id)

def undo_demo():
    demo = User.query.filter(User.username=="deMOUSEr").first()
    db.session.delete(demo)
    db.session.commit()
