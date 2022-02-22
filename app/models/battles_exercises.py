from .db import db

battles_exercises = db.Table(
    "battles_exercises",
    db.Column("battle_id", db.Integer, db.ForeignKey("battles.id"), primary_key=True),
    db.Column("exercise_id", db.Integer, db.ForeignKey("exercises.id"), primary_key=True)
)
