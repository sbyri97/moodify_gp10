from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message='Please enter a username.'), username_exists])
    email = StringField('email', validators=[DataRequired(message='Please enter an email.'), user_exists, Email('Please enter a valid email address')])
    first_name = StringField('first_name', validators=[DataRequired(message='Please enter your first name.')])
    last_name = StringField('last_name', validators=[DataRequired(message='Please enter your last name.')])
    password = StringField('password', validators=[DataRequired(message='Password is required.'), EqualTo('confirm_password', message='Both Passwords Must Match')])
    confirm_password = StringField('confirm_password', validators=[DataRequired(message='Please confirm your password.')])
