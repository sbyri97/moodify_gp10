from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Library


library_routes = Blueprint('library', __name__)

@library_routes.route('/<int:id>')
def song(id):
  song = Library.query.get(id)
  return song.to_dict()
