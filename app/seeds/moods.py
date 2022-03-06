from datetime import datetime
from app.models import db, Mood



def seed_moods():

  happy = Mood(name="happy", image_url="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", created_at=datetime.now(), updated_at=datetime.now())
  energetic = Mood(name="energetic", image_url="https://images.unsplash.com/photo-1621903084350-665bbd5b7f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVuZXJnZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  romantic = Mood(name="romantic", image_url="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvbWFudGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  serene = Mood(name="serene", image_url="https://images.unsplash.com/photo-1587805420704-23004be125a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VycyUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  chill = Mood(name="chill", image_url="https://images.unsplash.com/photo-1568547741072-0c2468182867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  gloomy = Mood(name="gloomy", image_url="https://images.unsplash.com/photo-1514673309919-5998bbbadf7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VyZW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  angry = Mood(name="angry", image_url="https://images.unsplash.com/photo-1505017791108-7b40f307cdc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60", created_at=datetime.now(), updated_at=datetime.now())
  heartbreak = Mood(name="heartbreak", image_url="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", created_at=datetime.now(), updated_at=datetime.now())
  productive = Mood(name="productive", image_url="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", created_at=datetime.now(), updated_at=datetime.now())


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
