# from sqlalchemy import Date
from datetime import datetime
from app.models import db, playlist_songs
from alembic import op


# def seed_playlistsongs():
op.bulk_insert(playlist_songs,
[
{"library_id":1, "playlist_id":1, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":2, "playlist_id":1, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":3, "playlist_id":1, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":4, "playlist_id":2, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":5, "playlist_id":2, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":6, "playlist_id":2, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":7, "playlist_id":3, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":8, "playlist_id":3, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":9, "playlist_id":3, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":10, "playlist_id":4, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":11, "playlist_id":4, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":12, "playlist_id":4, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":13, "playlist_id":5, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":14, "playlist_id":5, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":15, "playlist_id":5, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":16, "playlist_id":6, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":17, "playlist_id":6, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":18, "playlist_id":6, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":19, "playlist_id":7, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":20, "playlist_id":7, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":21, "playlist_id":7, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":22, "playlist_id":8, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":23, "playlist_id":8, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":24, "playlist_id":8, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":25, "playlist_id":9, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":26, "playlist_id":9, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":27, "playlist_id":9, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":39, "playlist_id":10, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":38, "playlist_id":10, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":37, "playlist_id":10, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":28, "playlist_id":10, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":33, "playlist_id":10, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":31, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":41, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":42, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":29, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":35, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":36, "playlist_id":11, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":32, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":30, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":34, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":44, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":43, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":40, "playlist_id":12, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":45, "playlist_id":13, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":46, "playlist_id":13, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":47, "playlist_id":13, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":54, "playlist_id":13, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":48, "playlist_id":14, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":50, "playlist_id":14, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":51, "playlist_id":14, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":52, "playlist_id":15, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":53, "playlist_id":15, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":49, "playlist_id":15, "created_at":datetime.now(), "updated_at":datetime.now()},


{"library_id":64, "playlist_id":16, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":65, "playlist_id":16, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":66, "playlist_id":16, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":67, "playlist_id":17, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":68, "playlist_id":17, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":69, "playlist_id":17, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":70, "playlist_id":18, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":71, "playlist_id":18, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":72, "playlist_id":18, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":61, "playlist_id":19, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":62, "playlist_id":19, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":63, "playlist_id":19, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":55, "playlist_id":20, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":56, "playlist_id":20, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":57, "playlist_id":20, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":58, "playlist_id":21, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":59, "playlist_id":21, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":60, "playlist_id":21, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":77, "playlist_id":22, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":80, "playlist_id":22, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":81, "playlist_id":22, "created_at":datetime.now(), "updated_at":datetime.now()},


{"library_id":76, "playlist_id":23, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":78, "playlist_id":23, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":79, "playlist_id":23, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":73, "playlist_id":24, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":74, "playlist_id":24, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":75, "playlist_id":24, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":82, "playlist_id":25, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":83, "playlist_id":25, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":87, "playlist_id":25, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":86, "playlist_id":26, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":88, "playlist_id":26, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":84, "playlist_id":26, "created_at":datetime.now(), "updated_at":datetime.now()},

{"library_id":85, "playlist_id":27, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":89, "playlist_id":27, "created_at":datetime.now(), "updated_at":datetime.now()},
{"library_id":90, "playlist_id":27, "created_at":datetime.now(), "updated_at":datetime.now()},
])

db.session.commit()

def undo_playlistsongs():
    # this restarts everything that has been added
    db.session.execute('TRUNCATE playlist_songs.insert().values RESTART IDENTITY CASCADE;')
    db.session.commit()














# Message Alex Smaldone, Joan Buck, Sai Byri


# Shift + Return to add a new line
# Files
