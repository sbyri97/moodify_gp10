from app.models import db, User
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    admin = User(
        username='admin', email='admin@moodify.com', password='password', first_name="Moodify", last_name="Admin", created_at=datetime.now(), updated_at=datetime.now())
    demo = User(
        username='demo', email='demoe@aa.io', password='password', first_name="Doug", last_name="Demo", created_at=datetime.now(), updated_at=datetime.now())
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name="Bobbie", last_name="Flay", created_at=datetime.now(), updated_at=datetime.now())

    db.session.add(admin)
    db.session.add(demo)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
