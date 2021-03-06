from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from .db import db


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    exercises = db.relationship("Exercise", back_populates="user", cascade="all, delete")
    logs = db.relationship("Log", back_populates="user", cascade="all, delete")
    battles = db.relationship("Battle", back_populates="user", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'image': self.image,
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at),
            'logs': [log.to_dict() for log in self.logs],
            'battles': [battle.to_dict() for battle in self.battles]
        }
