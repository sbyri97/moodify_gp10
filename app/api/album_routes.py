from flask import Blueprint
from flask_login import login_required
from app.models import Library
import sqlalchemy as sa

album_routes = Blueprint('albums', __name__)

@album_routes.route('/<albumName>')
def artist(albumName):
  albumSongs = Library.query.filter(Library.album_name == albumName).all()

  albumSongs_dict = [song.to_dict() for song in albumSongs]

  return {"songs": albumSongs_dict}
