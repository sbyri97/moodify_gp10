from .db import db

playlist_songs = db.Table(
  "playlist_songs",
  db.Column("library_id", db.Integer, db.ForeignKey("library.id"), primary_key=True),
  db.Column("playlist_id",db.Integer, db.ForeignKey("playlists.id"), primary_key=True)
)
