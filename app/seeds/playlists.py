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


  one = Playlist(user_id=1, name="Happy Hits", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  two = Playlist(user_id=1, name="Good Vibe Oldies", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  three = Playlist(user_id=1, name="Party Playlist", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  four = Playlist(user_id=1, name="All the Feels", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  five = Playlist(user_id=1, name="reminisce.", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  six = Playlist(user_id=1, name="gray day", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  seven = Playlist(user_id=1, name="!!!!!", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
  eight = Playlist(user_id=1, name="Grunge & Angst", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
  nine = Playlist(user_id=1, name="Fight Back", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())

  ten = Playlist(user_id=1, name="Dance With Me", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  eleven = Playlist(user_id=1, name="Let's Party!", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  twelve = Playlist(user_id=1, name="Summer Festival Vibes", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  thirteen = Playlist(user_id=1, name="Classical Music for a Productive Day", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
  fourteen = Playlist(user_id=1, name="Productive Morning", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
  fifteen = Playlist(user_id=1, name="Zone-Out", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())

  sixteen = Playlist(user_id=1, name="Live In Harmony", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  seventeen = Playlist(user_id=1, name="Cool Off Time", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  eighteen = Playlist(user_id=1, name="Know Your Serene", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  nineteen = Playlist(user_id=1, name="Light Hits", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
  twenty = Playlist(user_id=1, name="Chilled Souls", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
  twentyone = Playlist(user_id=1, name="Wake Up Early", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())

  a22 = Playlist(user_id=1, name="Passion", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  a23 = Playlist(user_id=1, name="Infatuation", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  a24 = Playlist(user_id=1, name="Yearning", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  a25 = Playlist(user_id=1, name="Heartache", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
  a26 = Playlist(user_id=1, name="It's Over", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
  a27 = Playlist(user_id=1, name="No Shot for Second Chances", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())

# Joan playlists one through nine, Katerina playlists ten through fifteen, Sai playlists sixteen through twentyone, Alex playlists twentytwo through twentyseven



  # after last playlist instance
  db.session.add(one)
  db.session.add(two)
  db.session.add(three)
  db.session.add(four)
  db.session.add(five)
  db.session.add(six)
  db.session.add(seven)
  db.session.add(eight)
  db.session.add(nine)

  db.session.add(ten)
  db.session.add(eleven)
  db.session.add(twelve)
  db.session.add(thirteen)
  db.session.add(fourteen)
  db.session.add(fifteen)

  db.session.add(sixteen)
  db.session.add(seventeen)
  db.session.add(eighteen)
  db.session.add(nineteen)
  db.session.add(twenty)
  db.session.add(twentyone)

  db.session.add(a22)
  db.session.add(a23)
  db.session.add(a24)
  db.session.add(a25)
  db.session.add(a26)
  db.session.add(a27)
  # continue adding for all playlist instances once data is consolidated

  db.session.commit()


def undo_playlists():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
  db.session.commit()
