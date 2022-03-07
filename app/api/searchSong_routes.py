from __future__ import print_function
from flask import Blueprint, render_template
from app.models import Library


searchSong_routes = Blueprint('search', __name__)


@searchSong_routes.route('/<nameOfSong>')
def searchSong(nameOfSong):
    # kwargs = {"song_title": nameOfSong}
    # songs = str(nameOfSong)
    song = Library.query.filter_by(song_title=f'{nameOfSong}').all()
    
    print("This is name of Song:::", song)
    return render_template("searchSong.html", song=song)



