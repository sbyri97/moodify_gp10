from flask import Blueprint, abort
from flask_login import login_required
from app.models import Playlist, Mood


mood_routes = Blueprint('moods', __name__)

@mood_routes.route('/<int:id>')
# DO WE NEED LOGIN REQUIRED? route should only be accessible by logged in user
# @login_required
def mood(id):
  mood = Mood.query.get(id)
  if mood is None:
    abort(404)
  mood_dict = mood.to_dict()

  moodPlaylists = Playlist.query.filter(Playlist.user_id == 1, Playlist.mood_id == id).all()
  moodPlaylists_dict = [playlist.to_dict() for playlist in moodPlaylists]

  return {"mood": mood_dict, "moodPlaylists": moodPlaylists_dict}
