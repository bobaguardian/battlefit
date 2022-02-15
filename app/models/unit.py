from .db import db

class Unit(db.Model):
    __tablename__ = 'units'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
