from datetime import datetime
from app.models import db, Library

def seed_library():
  one = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  two = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  three = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  four = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  five = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  six = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  seven = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  eight = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  nine = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  ten = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  eleven = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  twelve = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  thirteen = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  fourteen = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  fifteen = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  sixteen = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())
  sixteen = Library(artist_name="", album_name="", album_coverart_url="", song_title="", song_url="", created_at=datetime.now(), updated_at=datetime.now())

# add more as needed,

  # Joan one through twentyseven
  # Katerina twentyeight through fortysix
  # Sai fortyseven through sixtyfive
  # Alex sixtysix through eightyfour






  # after last song instance
  db.session.add(one)
  db.session.add(two)
  # continue adding for all song instances once data is consolidated

  db.session.commit()


def undo_library():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE library RESTART IDENTITY CASCADE;')
  db.session.commit()
