from .db import db
from datetime import datetime

class Follows(db.Model):
  __tablename__ = "follows"

  id = db.Column(db.Integer, primary_key=True)
  person_following = db.Column(db.Integer, db.ForeignKey("users.id"))
  person_followed = db.Column(db.Integer, db.ForeignKey("users.id"))
  created_at = db.Column(db.DateTime, default=datetime.now)
  updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

  user_following = db.relationship("User", back_populates="following")
  user_followed = db.relationship("User", back_populates="followed")
