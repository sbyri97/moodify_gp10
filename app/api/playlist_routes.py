from flask import Blueprint, abort, request, redirect
from flask_login import login_required
from sqlalchemy import null
from app.models import Playlist, Library, db
from app.forms.new_playlist_form import NewPlaylistForm

playlist_routes = Blueprint('playlists', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



# get single playlist
@playlist_routes.route('/<int:id>')
def playlist(id):
    # lib_tests = Library.query.filter(Library.id == playlist_songs.c.library_id, playlist_songs.c.playlist_id == id).all()
    playlist = Playlist.query.get(id)

    # error handling
    if playlist is None:
        abort(404)

    playlist_songs = playlist.library
    playlist_songs_dicts = [song.to_dict() for song in playlist_songs]
    # playlists = Playlist.query.join(Library).filter(Playlist.id == int(id))
    # dict_playlist = [playlist.to_dict() for playlist in playlists]
    # return {"playlist": playlist.to_dict()}
    return { "songs": (playlist_songs_dicts), "playlist_name": playlist.name, "id": id}


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
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_playlist = Playlist(name=form.data['name'], mood_id=form.data['mood_id'], user_id=form.data['user_id'])

        db.session.add(new_playlist)
        db.session.commit()

        return new_playlist.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}

# edit playlist
@playlist_routes.route('/<int:id>', methods=["PUT"])
def edit_playlist(id):
    form = NewPlaylistForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    playlist = Playlist.query.get(id)

    if form.validate_on_submit():
        playlist.name = form.data['name']
        playlist.mood_id = form.data['mood_id']
        playlist.user_id = form.data['user_id']
        db.session.add(playlist)
        db.session.commit()

        return playlist.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}

@playlist_routes.route('/addSongsToPlaylist', methods=['GET', 'POST'])
def add_song_to_playlist():

    songId = request.json['songId']
    playlistId = request.json['playlistId']


    song_new = Library.query.get(songId)
    playlist_new = Playlist.query.get(playlistId)


    song_new.playlists.append(playlist_new)
    db.session.commit()

    playlist = Playlist.query.get(playlistId)
    playlist_songs = playlist.library
    playlist_songs_dicts = [song.to_dict() for song in playlist_songs]

    return {"songs": (playlist_songs_dicts), "playlist_name": playlist.name}


# delete playlist
@playlist_routes.route('/<int:id>', methods=["DELETE"])
def delete_playlist(id):
    playlist = Playlist.query.get(id)

    db.session.delete(playlist)
    db.session.commit()

    return {id: playlist.id}
