from app.models.library import Library
from .db import db
from .playlist_songs import playlist_songs
from datetime import datetime

class Playlist(db.Model):
  __tablename__ = "playlists"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  mood_id = db.Column(db.Integer, db.ForeignKey("moods.id"))
  name = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.now())
  updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

  user = db.relationship("User", back_populates="playlists")
  mood = db.relationship("Mood", back_populates="playlists")

  library = db.relationship("Library",
   back_populates="playlists",
  #  join table
   secondary=playlist_songs,
  #  primary join = applies from this table to join table
   primaryjoin=(playlist_songs.c.playlist_id == id),
  #  secondary join = applies from join table to other table
   secondaryjoin=(playlist_songs.c.library_id == Library.id)
   )

  def to_dict(self):
      return {
        "id": self.id,
        "user_id": self.user_id,
        "mood_id": self.mood_id,
        "name": self.name,
      }
