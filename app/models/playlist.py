from .db import db
from .playlist_songs import playlist_songs
from datetime import datetime

class Playlist(db.Model):
  __tablename__ = "playlists"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  mood_id = db.Column(db.Integer, db.ForeignKey("moods.id"))
  name = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.now)
  updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

  user = db.relationship("User", back_populates="playlists")
  mood = db.relationship("Mood", back_populates="playlists")

  library = db.relationship("Library", back_populates="playlists", secondary=playlist_songs)
