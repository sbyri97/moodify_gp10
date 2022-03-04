Table Users {
  id integer [pk, increment, not null]
  email varchar(50) [unique, not null]
  username varchar(50) [unique, not null]
  first_name varchar(50)
  last_name varchar(50)
  hashedPassword varchar (50)
  createdAt timestamp
  updatedAt timestamp
}

Table Library {
  id integer [pk, increment, not null]
  artist_name varchar(100)
  album_name varchar(100)
  album_coverart_url varchar(255)
  song_title varchar(100)
  song_url varchar(255)
  createdAt timestamp
  updatedAt timestamp
}

Table Playlists {
  id integer [pk, increment, not null]
  user_id integer [ref: > Users.id]
  name varchar(100)
  mood_id integer [ref: > Moods.id]
  createdAt timestamp
  updatedAt timestamp
}

Table PlaylistSongs {
  id integer [pk, increment, not null]
  library_id integer [ref: > Library.id]
  playlist_id integer [ref: > Playlists.id]
  createdAt timestamp
  updatedAt timestamp
}


Table Follows {
  id integer [pk, increment, not null]
  // the person who chooses to follow someone
  person_following integer [ref: > Users.id]
  // the person being followed
  person_followed integer [ref: > Users.id]
  createdAt timestamp
  updatedAt timestamp
}

Table Moods {
  id integer [pk, increment, not null]
  name varchar(50)
  image_url varchar(255)
  createdAt timestamp
  updatedAt timestamp
}