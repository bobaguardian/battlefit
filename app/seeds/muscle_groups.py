from app.models import db, MuscleGroup


def seed_muscle_groups():
    ms1 = MuscleGroup(name="Abs", image="https://battle-fit.s3.us-west-1.amazonaws.com/f2e17e9b41f24320aaa2c6647287373c.jpg")
    ms2 = MuscleGroup(name="Back", image="https://battle-fit.s3.us-west-1.amazonaws.com/df4fbb79bdf848e5ae2357f4bd5c8c6b.png")
    ms3 = MuscleGroup(name="Biceps", image="https://battle-fit.s3.us-west-1.amazonaws.com/e003287181d1440eb7d4c1335d14d3d8.png")
    ms4 = MuscleGroup(name="Calves", image="https://battle-fit.s3.us-west-1.amazonaws.com/2659e4606f4f4f4498c822bc75090754.jpg")
    ms5 = MuscleGroup(name="Cardio", image="https://battle-fit.s3.amazonaws.com/b711ad77c46d49319a1632f80766471e.png")
    ms6 = MuscleGroup(name="Chest", image="https://battle-fit.s3.amazonaws.com/df5a05419b294e01932b45191566c361.png")
    ms7 = MuscleGroup(name="Forearms", image="https://battle-fit.s3.amazonaws.com/2db2d53366cf422b9e563a567776a3d5.png")
    ms8 = MuscleGroup(name="Glutes", image="https://battle-fit.s3.amazonaws.com/b2fba3e124fe4ae89d3394a765ed16d2.jpg")
    ms9 = MuscleGroup(name="Legs", image="https://battle-fit.s3.amazonaws.com/32077ac40d7c4db5b7dfbc17b3cefb64.jpg")
    ms10 = MuscleGroup(name="Shoulders", image="https://battle-fit.s3.amazonaws.com/2c9a9c141621470cacd18ac73c0725bf.png")
    ms11 = MuscleGroup(name="Triceps", image="https://battle-fit.s3.amazonaws.com/d7c91c11eac445ffb4e64edd978e8ba9.png")
    ms12 = MuscleGroup(name="Other", image="https://battle-fit.s3.amazonaws.com/229112cd01914395abcff0148826f39c.png")

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


def undo_muscle_groups():
    db.session.execute('TRUNCATE muscle_groups RESTART IDENTITY CASCADE;')
    db.session.commit()
