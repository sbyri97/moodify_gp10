from wsgiref.validate import validator
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Playlist

class NewPlaylistForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    mood_id = StringField("mood_id", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
