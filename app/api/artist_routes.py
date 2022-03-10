from flask import Blueprint
from flask_login import login_required
from app.models import Library
import sqlalchemy as sa

artist_routes = Blueprint('artists', __name__)

@artist_routes.route('/<artistName>')
def artist(artistName):
  artistSongs = Library.query.filter(Library.artist_name == artistName).all()

  artistSongs_dict = [song.to_dict() for song in artistSongs]

  return {"songs": artistSongs_dict, "artist_name": artistName, "id": artistName}
