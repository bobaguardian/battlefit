from datetime import datetime
from app.models import db, Battle


def seed_battles():
    battle1 = Battle(user_id=2, monster_id=1, defeated=False, date=datetime(2022, 1, 1))
    battle2 = Battle(user_id=2, monster_id=41, defeated=False, date=datetime(2022, 2, 14))
    battle3 = Battle(user_id=2, monster_id=38, defeated=False, date=datetime(2022, 2, 14))
    battle4 = Battle(user_id=2, monster_id=10, defeated=True, date=datetime(2022, 2, 14))
    battle5 = Battle(user_id=2, monster_id=18, defeated=True, date=datetime(2022, 1, 19))
    battle6 = Battle(user_id=2, monster_id=53, defeated=False, date=datetime(2022, 2, 7))
    battle7 = Battle(user_id=2, monster_id=1, defeated=True, date=datetime(2022, 2, 2))
    battle8 = Battle(user_id=2, monster_id=1, defeated=True, date=datetime(2022, 2, 14))



    db.session.add(battle1)
    db.session.add(battle2)
    db.session.add(battle3)
    db.session.add(battle4)
    db.session.add(battle5)
    db.session.add(battle6)
    db.session.add(battle7)
    db.session.add(battle8)

    db.session.commit()

def undo_battles():
    db.session.execute('TRUNCATE battles RESTART IDENTITY CASCADE;')
    db.session.commit()
