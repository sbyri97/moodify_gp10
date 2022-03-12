from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Playlist, Mood, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    user_dict = user.to_dict()

    playlists = Playlist.query.filter(Playlist.user_id == id)
    playlists_dict = [playlist.to_dict() for playlist in playlists]

    currentUser = User.query.get(current_user.id)
    currentFollows = currentUser.following
    follows_dict = [follow.to_dict() for follow in currentFollows]

    profileUserFollows = currentUser.followers
    follower_dict = [follow.to_dict() for follow in profileUserFollows]

    isFollowing = "none"
    followerIds = [follower["id"] for follower in follower_dict]
    if id in followerIds:
        isFollowing = "true"
    else:
        isFollowing = ""

    return {"userInfo": user_dict, "userPlaylists": playlists_dict, "userFollows": follower_dict, "userFollowers": follows_dict, "isFollowing": isFollowing }


@user_routes.route('/<int:id>', methods=["POST"])
def userFollow(id):
    followedId = request.json["followed_id"]
    followerId = request.json["follower_id"]

    followedUser = User.query.get(followedId)
    followingUser = User.query.get(followerId)

    followingUser.followers.append(followedUser)
    db.session.commit()

    currentUser = User.query.get(followerId)
    currentFollows = currentUser.followers
    follower_dict = [follow.to_dict() for follow in currentFollows]

    return {"userFollows": follower_dict, "isFollowing": "true"}

@user_routes.route('/<int:id>', methods=["DELETE"])
def userUnfollow(id):
    user = User.query.get(current_user.id)
    removeUser = User.query.get(id)

    user.followers.remove(removeUser)
    db.session.commit()

    currentUser = User.query.get(current_user.id)
    currentFollows = currentUser.followers
    follower_dict = [follow.to_dict() for follow in currentFollows]

    return {"userFollows": follower_dict, "isFollowing": ""}
