from flask import Blueprint
from app.models import Library


searchSong_routes = Blueprint('search', __name__)


@searchSong_routes.route('/songs/<nameOfItem>')
def searchSong(nameOfItem):
    songs = Library.query.filter(Library.song_title.ilike(f'%{nameOfItem}%'))
    dict_songs = [song.to_dict() for song in songs]
    return {"songs": dict_songs}

@searchSong_routes.route('/artists/<nameOfItem>')
def searchArtist(nameOfItem):
    artists = Library.query.filter(Library.artist_name.ilike(f'%{nameOfItem}%'))
    dict_artists = [artist.to_dict() for artist in artists]
    return {"artists": dict_artists}

# @searchSong_routes.route('/albums/<nameOfItem>')
# def searchAlbum(nameOfItem):
#     albums = Library.query.filter(Library.album_name.ilike(f'%{nameOfItem}%'))
#     dict_albums = [album.to_dict() for album in albums]
#     return {"albums": dict_albums}
