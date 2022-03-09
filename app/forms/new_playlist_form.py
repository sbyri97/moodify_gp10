from wsgiref.validate import validator
from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired, InputRequired
from app.models import Playlist

class NewPlaylistForm(FlaskForm):
    name = StringField("name", validators=[InputRequired(message='Please name your playlist.')])
    mood_id = SelectField("mood_id", validators=[InputRequired(message='Please select a mood for your playlist.')], choices=[1, 2, 3, 4, 5, 6, 7, 8, 9])
    user_id = IntegerField("user_id", validators=[DataRequired()])
