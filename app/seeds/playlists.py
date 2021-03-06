from datetime import datetime
from app.models import db, Playlist


p1 = Playlist(user_id=1, name="Happy Hits", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
p2 = Playlist(user_id=1, name="Good Vibe Oldies", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
p3 = Playlist(user_id=1, name="Party Playlist", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
p4 = Playlist(user_id=1, name="All the Feels", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
p5 = Playlist(user_id=1, name="reminisce.", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
p6 = Playlist(user_id=1, name="gray day", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
p7 = Playlist(user_id=1, name="!!!!!", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
p8 = Playlist(user_id=1, name="Grunge & Angst", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
p9 = Playlist(user_id=1, name="Fight Back", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
p10 = Playlist(user_id=1, name="Dance With Me", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
p11 = Playlist(user_id=1, name="Let's Party!", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
p12 = Playlist(user_id=1, name="Summer Festival Vibes", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
p13 = Playlist(user_id=1, name="Classical Music for a Productive Day", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
p14 = Playlist(user_id=1, name="Productive Morning", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
p15 = Playlist(user_id=1, name="Zone-Out", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
p16 = Playlist(user_id=1, name="Live In Harmony", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
p17 = Playlist(user_id=1, name="Cool Off Time", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
p18 = Playlist(user_id=1, name="Know Your Serene", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
p19 = Playlist(user_id=1, name="Light Hits", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
p20 = Playlist(user_id=1, name="Chilled Souls", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
p21 = Playlist(user_id=1, name="Wake Up Early", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
p22 = Playlist(user_id=1, name="Passion", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
p23 = Playlist(user_id=1, name="Infatuation", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
p24 = Playlist(user_id=1, name="Yearning", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
p25 = Playlist(user_id=1, name="Heartache", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
p26 = Playlist(user_id=1, name="It's Over", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
p27 = Playlist(user_id=1, name="No Shot for Second Chances", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())


def seed_playlists():


  p1 = Playlist(user_id=1, name="Happy Hits", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  p2 = Playlist(user_id=1, name="Good Vibe Oldies", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  p3 = Playlist(user_id=1, name="Party Playlist", mood_id=1, created_at=datetime.now(), updated_at=datetime.now())
  p4 = Playlist(user_id=1, name="All the Feels", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  p5 = Playlist(user_id=1, name="reminisce.", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  p6 = Playlist(user_id=1, name="gray day", mood_id=6, created_at=datetime.now(), updated_at=datetime.now())
  p7 = Playlist(user_id=1, name="!!!!!", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
  p8 = Playlist(user_id=1, name="Grunge & Angst", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())
  p9 = Playlist(user_id=1, name="Fight Back", mood_id=7, created_at=datetime.now(), updated_at=datetime.now())

  p10 = Playlist(user_id=1, name="Dance With Me", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  p11 = Playlist(user_id=1, name="Let's Party!", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  p12 = Playlist(user_id=1, name="Summer Festival Vibes", mood_id=2, created_at=datetime.now(), updated_at=datetime.now())
  p13 = Playlist(user_id=1, name="Classical Music for a Productive Day", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
  p14 = Playlist(user_id=1, name="Productive Morning", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())
  p15 = Playlist(user_id=1, name="Zone-Out", mood_id=9, created_at=datetime.now(), updated_at=datetime.now())

  p16 = Playlist(user_id=1, name="Live In Harmony", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  p17 = Playlist(user_id=1, name="Cool Off Time", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  p18 = Playlist(user_id=1, name="Know Your Serene", mood_id=4, created_at=datetime.now(), updated_at=datetime.now())
  p19 = Playlist(user_id=1, name="Light Hits", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
  p20 = Playlist(user_id=1, name="Chilled Souls", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())
  p21 = Playlist(user_id=1, name="Wake Up Early", mood_id=5, created_at=datetime.now(), updated_at=datetime.now())

  p22 = Playlist(user_id=1, name="Passion", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  p23 = Playlist(user_id=1, name="Infatuation", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  p24 = Playlist(user_id=1, name="Yearning", mood_id=3, created_at=datetime.now(), updated_at=datetime.now())
  p25 = Playlist(user_id=1, name="Heartache", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
  p26 = Playlist(user_id=1, name="It's Over", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())
  p27 = Playlist(user_id=1, name="No Shot for Second Chances", mood_id=8, created_at=datetime.now(), updated_at=datetime.now())


  db.session.add(p1)
  db.session.add(p2)
  db.session.add(p3)
  db.session.add(p4)
  db.session.add(p5)
  db.session.add(p6)
  db.session.add(p7)
  db.session.add(p8)
  db.session.add(p9)
  db.session.add(p10)
  db.session.add(p11)
  db.session.add(p12)
  db.session.add(p13)
  db.session.add(p14)
  db.session.add(p15)
  db.session.add(p16)
  db.session.add(p17)
  db.session.add(p18)
  db.session.add(p19)
  db.session.add(p20)
  db.session.add(p21)
  db.session.add(p22)
  db.session.add(p23)
  db.session.add(p24)
  db.session.add(p25)
  db.session.add(p26)
  db.session.add(p27)

  db.session.commit()


def undo_playlists():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
  db.session.commit()
