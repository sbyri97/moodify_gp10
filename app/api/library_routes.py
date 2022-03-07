from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Library


library_routes = Blueprint('library', __name__)

@library_routes.route('/<int:id>')
# DO WE NEED LOGIN REQUIRED? route should only be accessible by logged in user
def song(id):
  song = Library.query.get(id)
  print(song.to_dict())
  return song.to_dict()
