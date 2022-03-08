from flask import Blueprint, abort
from flask_login import login_required
from app.models import Playlist, playlist_songs, Library
import sqlalchemy as sa

playlist_routes = Blueprint('playlists', __name__)

@playlist_routes.route('/<int:id>')
def playlist(id):
    # lib_tests = Library.query.filter(Library.id == playlist_songs.c.library_id, playlist_songs.c.playlist_id == id).all()
    playlist = Playlist.query.get(id)

    # error handling
    # if playlist is None:
    #     abort(404)

    playlist_songs = playlist.library
    playlist_songs_dicts = [song.to_dict() for song in playlist_songs]
    # playlists = Playlist.query.join(Library).filter(Playlist.id == int(id))
    # dict_playlist = [playlist.to_dict() for playlist in playlists]
    # return {"playlist": playlist.to_dict()}
    return { "playlist_songs": (playlist_songs_dicts)}
