from flask import Blueprint,
from flask_login import login_required
from app.models import Library
import sqlalchemy as sa

artist_routes = Blueprint('artists', __name__)

@artist_routes.route('/<str:id>')
def artist(artistName):
  artistSongs = Library.query.filter(Library.artist_name == artistName)
