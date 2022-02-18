from datetime import datetime
from .db import db

class Exercise(db.Model):
    __tablename__ = 'exercises'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    muscle_group_id = db.Column(db.Integer, db.ForeignKey("muscle_groups.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String)
    image = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship("User", back_populates="exercises")
    muscle_group = db.relationship("MuscleGroup", back_populates="exercises")
    logs = db.relationship("Log", back_populates="exercise", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'user': self.user.to_dict(),
            'muscle_group': self.muscle_group.to_dict(),
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at)
        }
