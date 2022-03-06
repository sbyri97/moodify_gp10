from datetime import datetime
from app.models import db, Mood



def seed_moods():
  happy = Mood(name="happy", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  energetic = Mood(name="energetic", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  romantic = Mood(name="romantic", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  serene = Mood(name="serene", image_url="https://media.wired.com/photos/59326b722a990b06268aa5fa/1:1/w_800,h_800,c_limit/6d7ffe37.jpg", created_at=datetime.now(), updated_at=datetime.now())
  chill = Mood(name="chill", image_url="https://i.pinimg.com/originals/7a/3f/c9/7a3fc91c09484ef12bd5cc51b42d333c.jpg", created_at=datetime.now(), updated_at=datetime.now())
  gloomy = Mood(name="gloomy", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  angry = Mood(name="angry", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  heartbreak = Mood(name="heartbreak", image_url="", created_at=datetime.now(), updated_at=datetime.now())
  productive = Mood(name="productive", image_url="", created_at=datetime.now(), updated_at=datetime.now())


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
