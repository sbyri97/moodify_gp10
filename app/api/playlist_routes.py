from flask import Blueprint, abort
from flask_login import login_required
from app.models import Playlist, db
from app.forms.new_playlist_form import NewPlaylistForm

playlist_routes = Blueprint('playlists', __name__)

# get single playlist
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
    return { "playlist_songs": (playlist_songs_dicts), "playlist_name": playlist.name}


# get all playlists for a user
@playlist_routes.route('/')
def playlists():
    playlists = Playlist.query.all()
    playlists_dict = [playlist.to_dict() for playlist in playlists]

    return { "playlists": playlists_dict }

# create new playlist
@playlist_routes.route('/', methods=["POST"])
def post_playlist():
    form = NewPlaylistForm()
    print(form.data)
    # if form.validate_on_submit():
        # need to pass mood id into this
    new_playlist = Playlist(name=form.data['name'], mood_id=form.data['mood_id'], user_id=form.data['user_id'])

    db.session.add(new_playlist)
    db.session.commit()

    return new_playlist.to_dict()

    # TO DO: add in form error handling
