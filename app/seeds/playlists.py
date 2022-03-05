from datetime import datetime
from app.models import db, Playlist

# mood ids:
    # happy = 1
    # energetic = 2
    # romantic = 3
    # serene = 4
    # chill = 5
    # gloomy = 6
    # angry = 7
    # heartbreak = 8
    # productive = 9

# all user_id 1 for our built in playlists

def seed_playlists():
  one = Playlist(user_id=1, name="Happy Time", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  two = Playlist(user_id=1, name="Party Playlist", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  three = Playlist(user_id=1, name="Celebration!", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())

# Joan playlists one through nine, Katerina playlists ten through fifteen, Sai playlists sixteen through twentyone, Alex playlists twentytwo through twentyseven



  # after last playlist instance
  db.session.add(one)
  db.session.add(two)
  # continue adding for all playlist instances once data is consolidated

  db.session.commit()


def undo_playlists():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
  db.session.commit()
