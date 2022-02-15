from datetime import datetime
from .db import db

class Log(db.Model):
    __tablename__ = 'logs'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey("exercises.id"), nullable=False)
    unit_id = db.Column(db.Integer, db.ForeignKey("units.id"), nullable=False)
    comment = db.Column(db.String)
    date = db.Column(db.DateTime, default=datetime.now())
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship("User", back_populates="logs")
    exercise = db.relationship("Exercise", backref="exercises")
    unit = db.relationship("Unit", backref="units")

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'date': self.date,
            'user': self.user.to_dict(),
            'exercise': self.exercise.to_dict(),
            'unit': self.unit.name,
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at)
        }
