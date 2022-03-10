from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Playlist, Mood

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    user_dict = user.to_dict()

    playlists = Playlist.query.filter(Playlist.user_id == id)
    playlists_dict = [playlist.to_dict() for playlist in playlists]

    return {"userInfo": user_dict, "userPlaylists": playlists_dict}
