from datetime import datetime
from app.models import db, Mood



def seed_moods():
  happy = Mood(user_id=1, name="happy", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  energetic = Mood(user_id=1, name="energetic", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  romantic = Mood(user_id=1, name="romantic", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  serene = Mood(user_id=1, name="serene", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  chill = Mood(user_id=1, name="chill", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  gloomy = Mood(user_id=1, name="gloomy", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  angry = Mood(user_id=1, name="angry", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  heartbreak = Mood(user_id=1, name="heartbreak", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  productive = Mood(user_id=1, name="productive", image_url="", created_at=datetime.now(), updated_at=datetime.now())

  db.session.add(happy)
  db.session.add(energetic)
  db.session.add(romantic)
  db.session.add(serene)
  db.session.add(chill)
  db.session.add(gloomy)
  db.session.add(angry)
  db.session.add(heartbreak)
  db.session.add(productive)

  db.session.commit()


def undo_moods():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE moods RESTART IDENTITY CASCADE;')
  db.session.commit()
