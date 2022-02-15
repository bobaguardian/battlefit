from .db import db

class MuscleGroup(db.Model):
    __tablename__ = 'muscle_groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    image = db.Column(db.String(255))


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image
        }
