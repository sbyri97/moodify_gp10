from .db import db
from .playlist_songs import playlist_songs
from datetime import datetime

class Library(db.Model):
  __tablename__ = "library"

  id = db.Column(db.Integer, primary_key=True)
  artist_name = db.Column(db.String(100), nullable=False)
  album_coverart_url = db.Column(db.String(255))
  album_name = db.Column(db.String(100))
  song_title = db.Column(db.String(100), nullable=False)
  song_url = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, default=datetime.now())
  updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

  playlists = db.relationship("Playlist", back_populates="library", secondary=playlist_songs)
