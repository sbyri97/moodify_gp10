from flask import Blueprint,
from flask_login import login_required
from app.models import Playlist, Mood


mood_routes = Blueprint('moods', __name__)

@mood_routes.route('/<int:id>')
# DO WE NEED LOGIN REQUIRED? route should only be accessible by logged in user
def mood(id):
  pass
