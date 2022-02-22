from flask_login import user_logged_in
from datetime import datetime

from .db import db
from .battles_exercises import battles_exercises

class Battle(db.Model):
    __tablename__ = 'battles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    monster_id = db.Column(db.Integer, db.ForeignKey("monsters.id"), nullable=False)
    date = db.Column(db.Date, default=datetime.now().date(), nullable=False)
    defeated = db.Column(db.Boolean, default=False)

    user = db.relationship("User", back_populates="battles")
    monster = db.relationship("Monster", back_populates="battles")
    exercises = db.relationship("Exercise", secondary=battles_exercises, back_populates="battles")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user.id,
            'monster': self.monster.to_dict(),
            'date': self.date,
            'defeated': self.defeated,
            'exercises': [exercise.to_dict() for exercise in self.exercises]
        }
