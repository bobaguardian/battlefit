from app.models import db, Battle

def seed_battles():
    battle1 = Battle(user_id=2, monster_id=1, defeated=True)
    battle2 = Battle(user_id=2, monster_id=41, defeated=False)
    battle3 = Battle(user_id=2, monster_id=38, defeated=False)
    battle4 = Battle(user_id=2, monster_id=10, defeated=True)
    battle5 = Battle(user_id=2, monster_id=18, defeated=True)
    battle6 = Battle(user_id=2, monster_id=53, defeated=False)

    db.session.add(battle1)
    db.session.add(battle2)
    db.session.add(battle3)
    db.session.add(battle4)
    db.session.add(battle5)
    db.session.add(battle6)

    db.session.commit()

def undo_battles():
    db.session.execute('TRUNCATE battles RESTART IDENTITY CASCADE;')
    db.session.commit()
