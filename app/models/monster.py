from .db import db

class Monster(db.Model):
    __tablename__ = 'monsters'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    level = db.Column(db.Integer, default=1)
    image = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)

    battles = db.relationship("Battle", back_populates="monster", cascade="all, delete")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'level': self.level,
            'image': self.image,
            'description': self.description
        }
