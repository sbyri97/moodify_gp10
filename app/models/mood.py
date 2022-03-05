from .db import db
from datetime import datetime


class Mood(db.Model):
  __tablename__ = "moods"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  image_url = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.now)
  updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

  playlists = db.relationship("Playlist", back_populates="mood")
