from datetime import datetime
from app.models import db, Library

def seed_library():

  one = Library (artist_name="Bobby McFerrin", album_name="Simple Pleasures", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/c/c7/Simple_Pleasures_cover.jpg", song_title="Don't Worry Be Happy", song_url="https://moodify.s3.amazonaws.com/Happy/Bobby+McFerrin+-+Don't+Worry+Be+Happy+(Official+Music+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  two = Library (artist_name="Pharrell", album_name="", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg", song_title="Happy", song_url="https://moodify.s3.amazonaws.com/Happy/Pharrell+Williams+-+Happy+(Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  three = Library (artist_name="Justin Timberlake", album_name="Trolls: Original Motion Picture Soundtrack", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/0/04/Trolls_Original_Motion_Picture_Soundtrack.png", song_title="Can't Stop the Feeling", song_url="https://moodify.s3.amazonaws.com/Happy/CAN'T+STOP+THE+FEELING!+(from+DreamWorks+Animation's+_TROLLS_)+(Official+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  four = Library (artist_name="Katrina and the Waves", album_name="Walking on Sunshine", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/2/22/Katrina-and-the-waves-walking-on-sunshine-Cover-Art.png", song_title="Walking On Sunshine", song_url="https://moodify.s3.amazonaws.com/Happy/Katrina+%26+The+Waves+-+Walking+On+Sunshine+(Official+Music+Video)+(2).mp3", created_at=datetime.now(), updated_at=datetime.now())
  five = Library (artist_name="Earth, Wind, & Fire", album_name="The Best of Earth, Wind, & Fire, Vol. 1", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/9/95/BestofEarthWind%26Fire.jpg", song_title="September", song_url="https://moodify.s3.amazonaws.com/Happy/Earth%2C+Wind+%26+Fire+-+September+(Official+HD+Video)+(1).mp3", created_at=datetime.now(), updated_at=datetime.now())
  six = Library (artist_name="Cyndi Lauper", album_name="She's So Unusual", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/0/09/ShesSoUnusual1984.PNG", song_title="Girls Just Wanna Have Fun", song_url="https://moodify.s3.amazonaws.com/Happy/Cyndi+Lauper+-+Girls+Just+Want+To+Have+Fun+(Official+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  seven = Library (artist_name="Outkast", album_name="Speakerboxxx/The Love Below", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/4/47/Outkast-speakerboxx-lovebelow.jpg", song_title="Hey Ya", song_url="https://moodify.s3.amazonaws.com/Happy/Outkast+-+Hey+Ya!+(Official+HD+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  eight = Library (artist_name="Black Eyed Peas", album_name="The E.N.D.", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/8/88/The_E.N.D._cover.png", song_title="I Gotta Feeling", song_url="https://moodify.s3.amazonaws.com/Happy/The+Black+Eyed+Peas+-+I+Gotta+Feeling+(Official+Music+Video)+(1).mp3", created_at=datetime.now(), updated_at=datetime.now())
  nine = Library (artist_name="Smashmouth", album_name="Shrek Soundtrack", album_coverart_url="https://m.media-amazon.com/images/I/71YWMP+1MWL._SL1400_.jpg", song_title="I'm a Believer", song_url="https://moodify.s3.amazonaws.com/Happy/Smash+Mouth+-+I'm+A+Believer.mp3", created_at=datetime.now(), updated_at=datetime.now())
  ten = Library (artist_name="Francis Skyes", album_name="", album_coverart_url="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", song_title="Won't Let Go", song_url="https://moodify.s3.amazonaws.com/Gloomy/Francis+Skyes+-+Won't+Let+Go.mp3", created_at=datetime.now(), updated_at=datetime.now())
  eleven = Library (artist_name="Francis Skyes", album_name="", album_coverart_url="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", song_title="Here and Now", song_url="https://moodify.s3.amazonaws.com/Gloomy/Francis+Skyes+-+Here+and+Now.mp3", created_at=datetime.now(), updated_at=datetime.now())
  twelve = Library (artist_name="Alabama Shakes", album_name="Sound & Color", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/2/2d/Alabama_Shakes_-_Sound_%26_Color_album_cover.jpg", song_title="This Feeling", song_url="https://moodify.s3.amazonaws.com/Gloomy/Alabama+Shakes+++This+Feeling.mp3", created_at=datetime.now(), updated_at=datetime.now())
  thirteen = Library (artist_name="Jeff Buckley", album_name="Grace", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg", song_title="Hallelujah", song_url="https://moodify.s3.amazonaws.com/Gloomy/Jeff+Buckley+-+Hallelujah+(Official+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  fourteen = Library (artist_name="Imogen Heap", album_name="Speak for Yourself", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/d/d9/Imogen_Heap_-_Speak_For_Yourself.jpg", song_title="Hide and Seek", song_url="https://moodify.s3.amazonaws.com/Gloomy/Imogen+Heap+-+Hide+And+Seek+(Official+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  fifteen = Library (artist_name="Coldplay", album_name="X & Y", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Coldplay_X%26Y.svg/1920px-Coldplay_X%26Y.svg.png", song_title="Fix You", song_url="https://moodify.s3.amazonaws.com/Gloomy/Coldplay+-+Fix+You+(Official+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixteen = Library (artist_name="Labrinth", album_name="Euphoria Soundtrack Season 1 & 2", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/a/ad/Euphoria_season_1_score.jpg", song_title="I'm Tired", song_url="https://moodify.s3.amazonaws.com/Gloomy/Labrinth+%26+Zendaya+-+I'm+Tired+(From+%E2%80%9CEuphoria%E2%80%9D+An+HBO+Original+Series+%E2%80%93+Lyric+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  seventeen = Library (artist_name="Sinead O'Connor", album_name="The Lion and the Cobra", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/d/d5/Sinead_Lion_Cobra_Original.jpg", song_title="Drink Before the War", song_url="https://moodify.s3.amazonaws.com/Gloomy/Drink+Before+the+War.mp3", created_at=datetime.now(), updated_at=datetime.now())
  eighteen = Library (artist_name="Labrinth", album_name="Euphoria Soundtrack Season 1 & 2", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/a/ad/Euphoria_season_1_score.jpg", song_title="Still Don't Know My Name", song_url="https://moodify.s3.amazonaws.com/Gloomy/Labrinth+-+Still+Don%E2%80%99t+Know+My+Name+(Official+Video)+_+euphoria+(Original+HBO+Score).mp3", created_at=datetime.now(), updated_at=datetime.now())
  nineteen= Library (artist_name="Alanis Morissette", album_name="Jagged Little Pill", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/4/47/Alanis_Morissette_-_Jagged_Little_Pill.jpg", song_title="You Oughta Know", song_url="https://moodify.s3.amazonaws.com/Angry/Alanis+Morissette+-+You+Oughta+Know+(Official+4K+Music+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twenty = Library (artist_name="CeeLo Green", album_name="The Lady Killer", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/0/06/The_Lady_Killer_cover.jpg", song_title="Forget You", song_url="https://moodify.s3.amazonaws.com/Angry/Cee+Lo+Green+-+Forget+You+(1).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentyone = Library (artist_name="Blu Cantrell", album_name="So Blu", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/4/43/So_Blu.jpg", song_title="Hit Em Up Style", song_url="https://moodify.s3.amazonaws.com/Angry/Blu+Cantrell+-+Hit+'Em+Up+Style+(Oops!)+(Video+Version).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentytwo = Library (artist_name="Nirvana", album_name="Nevermind", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg", song_title="Smells Like Teen Spirit", song_url="https://moodify.s3.amazonaws.com/Angry/Nirvana+-+Smells+Like+Teen+Spirit+(Official+Music+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentythree = Library (artist_name="Nirvana", album_name="Nevermind", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg", song_title="Come As You Are", song_url="https://moodify.s3.amazonaws.com/Angry/Nirvana+-+Come+As+You+Are+(Official+Music+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentyfour = Library (artist_name="The White Stripes", album_name="Elephant", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/1/11/Elephant%2C_The_White_Stripes.png", song_title="Seven Nation Army", song_url="https://moodify.s3.amazonaws.com/Angry/The+White+Stripes+-+Seven+Nation+Army+(Official+Music+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentyfive = Library (artist_name="DMX", album_name="Cradle 2 the Grave Soundtrack", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/2/20/Cradle_2_the_Grave_ST.jpg", song_title="X Gonna Give It To You", song_url="https://moodify.s3.amazonaws.com/Angry/DMX+-+X+Gon'+Give+It+To+Ya+(CLEAN)+%5BHQ%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentysix = Library (artist_name="Eminem", album_name="8 Mile Soundtrack", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/3/39/8milecover.jpg", song_title="Lose Yourself", song_url="https://moodify.s3.amazonaws.com/Angry/Eminem+-+Lose+Yourself+(Clean).mp3", created_at=datetime.now(), updated_at=datetime.now())
  twentyseven = Library (artist_name="Kanye West", album_name="Graduation", album_coverart_url="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", song_title="Stronger", song_url="https://moodify.s3.amazonaws.com/Angry/DMX+-+X+Gon'+Give+It+To+Ya+(CLEAN)+%5BHQ%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())

  fortyseven = Library(artist_name="Satyr", album_name="Barefoot", album_coverart_url="https://f4.bcbits.com/img/a2702560174_10.jpg", song_title="Barefoot", song_url="https://moodify.s3.amazonaws.com/Chill/Chilled+Soul/Barefoot+%5BySdAkc_xcK8%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fortyeight = Library(artist_name="Lemeria", album_name="Lemeria's Chill Beats", album_coverart_url="https://f4.bcbits.com/img/a1771540026_10.jpg", song_title="Arrival", song_url="https://moodify.s3.amazonaws.com/Chill/Chilled+Soul/Lemeria+-+Arrival+%5BF2ZmLZetSfY%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fortynine = Library(artist_name="Lemeria", album_name="Lemeria's Chill Beats", album_coverart_url="https://f4.bcbits.com/img/a3256841928_10.jpg", song_title="Rainy Town", song_url="https://moodify.s3.amazonaws.com/Chill/Chilled+Soul/Lemeria+-+Rainy+Town+%5B_shBlXH75K8%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fifty = Library(artist_name="Juniorodeo", album_name="Before Sunrise", album_coverart_url="https://f4.bcbits.com/img/a0515233722_10.jpg", song_title="Fig Trees", song_url="https://moodify.s3.amazonaws.com/Chill/Wake+Up+Early/Dillan+Witherow+-+Fig+Trees+Ft.+Blue+Wednesday+%5BSkvP5v2IX9I%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftyone = Library(artist_name="Juniorodeo", album_name="Before Sunrise", album_coverart_url="https://f4.bcbits.com/img/a0515233722_10.jpg", song_title="Opposite Ends", song_url="https://moodify.s3.amazonaws.com/Chill/Wake+Up+Early/Opposite+Ends+%5BlOBn2AEGatU%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftytwo = Library(artist_name="Juniorodeo", album_name="Before Sunrise", album_coverart_url="https://f4.bcbits.com/img/a0515233722_10.jpg", song_title="Field of Stars", song_url="https://moodify.s3.amazonaws.com/Chill/Wake+Up+Early/Field+of+Stars+%5Bc15svKDjIpQ%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftythree = Library(artist_name="Juniorodeo", album_name="Before Sunrise", album_coverart_url="https://f4.bcbits.com/img/a0515233722_10.jpg", song_title="Rose Bay", song_url="https://moodify.s3.amazonaws.com/Chill/Light+Hits/Rose+Bay+%5BW1VE33ACovg%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftyfour = Library(artist_name="Middle School", album_name="Passing Notes", album_coverart_url="https://images.genius.com/b408fc0d3c48656971d4f7921e5cbd8c.1000x1000x1.jpg", song_title="By The Window", song_url="https://moodify.s3.amazonaws.com/Chill/Light+Hits/Middle+School+-+By+The+Window+%5B8fzRN5rCt80%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftyfive = Library(artist_name="Middle School", album_name="Passing Notes", album_coverart_url="https://images.genius.com/b408fc0d3c48656971d4f7921e5cbd8c.1000x1000x1.jpg", song_title="Chit Chat", song_url="https://moodify.s3.amazonaws.com/Chill/Light+Hits/Chit+Chat+%5Ba8duAFOROYM%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftysix = Library(artist_name="Ever So Blue", album_name="Calme", album_coverart_url="https://i1.sndcdn.com/artworks-jzTtSk5lSBSe-0-t500x500.png", song_title="Calme", song_url="https://moodify.s3.amazonaws.com/Serene/Live+in+Harmony/Calme+%5BoeBAzkcA-Kk%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftyseven = Library(artist_name="Ever So Blue", album_name="Remembering", album_coverart_url="https://i1.sndcdn.com/artworks-ObbzwvOq1DXX-0-t500x500.png", song_title="Remembering", song_url="https://moodify.s3.amazonaws.com/Serene/Live+in+Harmony/+Remembering+by+Ever+So+Blue+%5BRFv5Tit6yW4%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftyeight = Library(artist_name="Akane", album_name="Color Me Blue", album_coverart_url="https://i.ytimg.com/vi/YguvZnzjrsU/maxresdefault.jpg", song_title="Color Me Blue", song_url="https://moodify.s3.amazonaws.com/Serene/Live+in+Harmony/Color+Me+Blue+%5BYguvZnzjrsU%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  fiftynine = Library(artist_name="Mauro Cangemi", album_name="Continuo", album_coverart_url="https://acloserlisten.files.wordpress.com/2020/11/apparat.jpg?w=710&h=710", song_title="Continuo", song_url="https://moodify.s3.amazonaws.com/Serene/Cool+Off+Time/Continuo+%5Bk6aLLVX1D7Y%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixty = Library(artist_name="Anna Goya", album_name="Reflect", album_coverart_url="https://i.ytimg.com/vi/ClFRhlwpd68/maxresdefault.jpg", song_title="Reflect", song_url="https://moodify.s3.amazonaws.com/Serene/Cool+Off+Time/reflect+%5BClFRhlwpd68%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixtyone = Library(artist_name="Dexter Mills", album_name="Unfinished Story", album_coverart_url="https://m.media-amazon.com/images/I/71C-xoSS78L._SS500_.jpg", song_title="Unfinished Story", song_url="https://moodify.s3.amazonaws.com/Serene/Cool+Off+Time/Unfinished+Story+%5BRmUmLA3vp6I%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixtytwo = Library(artist_name="The Piano Guys", album_name="The Piano Guys 2", album_coverart_url="https://i0.wp.com/www.cuebeatz.com/wp-content/uploads/2020/11/4c58e5ee0b286f41caa23444ea103a45.jpg?fit=640%2C640&ssl=1", song_title="Just The Way You Are", song_url="https://moodify.s3.amazonaws.com/Serene/Know+your+serene/Just+the+Way+You+Are+-+Bruno+Mars+(Piano_Cello+Cover)+-+The+Piano+Guys+%5BrIBRcQdzWQs%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixtythree = Library(artist_name="Flying Fingers", album_name="Peaches", album_coverart_url="https://i.pinimg.com/originals/a2/36/d5/a236d5ab852d9e36351ca73f37ed9341.jpg", song_title="Peaches", song_url="https://moodify.s3.amazonaws.com/Serene/Know+your+serene/Peaches+(Piano+Version)+%5BYlexN7WqQUo%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())
  sixtyfour = Library(artist_name="Leyland Moore", album_name="Traces", album_coverart_url="https://images.fineartamerica.com/images-medium-large-5/abstract-art-blue-square-three-ann-powell.jpg", song_title="Traces", song_url="https://moodify.s3.amazonaws.com/Serene/Know+your+serene/Traces+%5B-qvQuI8JLgM%5D.mp3", created_at=datetime.now(), updated_at=datetime.now())

  a66 = Library(artist_name="John Legend", album_name="Love In The Future", album_coverart_url="https://hiphop-n-more.com/wp-content/uploads/2013/07/john-legend-love-in-the-future.jpg", song_title="All of Me", song_url="https://moodify.s3.amazonaws.com/Romantic/John+Legend+-+All+of+Me.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a67 = Library(artist_name="Marvin Gaye", album_name="Let's Get It On", album_coverart_url="https://whythebeatlesarestillrelevant.files.wordpress.com/2020/05/marvin-gaye-lets-get-it-on.jpg", song_title="Let's Get It On", song_url="https://moodify.s3.amazonaws.com/Romantic/Lets+Get+It+On+++Marvin+Gaye+Lyrics+++YouTube.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a68 = Library(artist_name="Marvin Gaye", album_name="Let's Get It On", album_coverart_url="https://whythebeatlesarestillrelevant.files.wordpress.com/2020/05/marvin-gaye-lets-get-it-on.jpg", song_title="Please Stay (Once You Go Away)", song_url="https://moodify.s3.amazonaws.com/Romantic/Marvin+Gaye+_+Please+Stay+(Once+You+Go+Away).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a69 = Library(artist_name="Marvin Gaye", album_name="Let's Get It On", album_coverart_url="https://whythebeatlesarestillrelevant.files.wordpress.com/2020/05/marvin-gaye-lets-get-it-on.jpg", song_title="If I Should Die Tonight", song_url="https://moodify.s3.amazonaws.com/Romantic/Marvin+Gaye+_+If+I+Should+Die+Tonight.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a70 = Library(artist_name="Marvin Gaye", album_name="Let's Get It On", album_coverart_url="https://whythebeatlesarestillrelevant.files.wordpress.com/2020/05/marvin-gaye-lets-get-it-on.jpg", song_title="Just To Keep You Satisfied", song_url="https://moodify.s3.amazonaws.com/Romantic/Marvin+Gaye+-+Just+To+Keep+You+Satisfied.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a71 = Library(artist_name="Whitney Houston", album_name="The Bodyguard", album_coverart_url="https://cdn.smehost.net/whitneyhoustoncom-uslegacyprod/wp-content/uploads/2018/11/04_thebodyguard_v2-1024x1024.jpg", song_title="I Will Always Love You", song_url="https://moodify.s3.amazonaws.com/Romantic/Whitney+Houston+-+I+Will+Always+Love+You+-+Lyrics.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a72 = Library(artist_name="The Beach Boys", album_name="50 Big Ones: Greatest Hits", album_coverart_url="https://img.discogs.com/Ld28UcjCrlZKPPEgESFKBiT3S-Y=/fit-in/600x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4661752-1371425577-8857.jpeg.jpg", song_title="God Only Knows", song_url="https://moodify.s3.amazonaws.com/Romantic/Beach+Boys+-+God+Only+Knows+lyrics+(Lyric+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a73 = Library(artist_name="Ed Sheeran", album_name="Divide", album_coverart_url="https://metrotoparis.com/wp-content/uploads/2017/12/C1Lg3RvUQAQqHmZ.jpg", song_title="Perfect", song_url="https://moodify.s3.amazonaws.com/Romantic/Perfect+-+Ed+Sheeran+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a74 = Library(artist_name="Thomas Rhett", album_name="Tangled Up", album_coverart_url="https://townsquare.media/site/204/files/2015/06/cover3.jpg?w=980&q=75", song_title="Die A Happy Man", song_url="https://moodify.s3.amazonaws.com/Romantic/Thomas+Rhett+-+Die+A+Happy+Man+(Lyrics+_+Lyric+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a75 = Library(artist_name="Pat Benatar", album_name="In The Heat Of The Night", album_coverart_url="https://townsquare.media/site/295/files/2014/10/Chrysalis.jpg?w=980&q=75", song_title="Heartbreaker", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Pat+Benatar+-+Heartbreaker+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a76 = Library(artist_name="Adele", album_name="21", album_coverart_url="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg", song_title="Someone Like You", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Adele+-+Someone+Like+You+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a77 = Library(artist_name="Adele", album_name="21", album_coverart_url="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg", song_title="Rolling In The Deep", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Rolling+in+the+Deep+_+ADELE_+Lyrics.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a78 = Library(artist_name="Adele", album_name="21", album_coverart_url="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg", song_title="Rumour Has It", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Rumor+Has+It-+Adele+Lyrics.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a79 = Library(artist_name="Adele", album_name="21", album_coverart_url="https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg", song_title="Set Fire To The Rain", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Adele+-+Set+Fire+To+The+Rain+LYRICS!.mp3", created_at=datetime.now(), updated_at=datetime.now())
  a80 = Library(artist_name="Taylor Swift", album_name="Red (Taylor's Version)", album_coverart_url="https://cdn.shopify.com/s/files/1/0011/4651/9637/products/GKg0cS-Y_dfc83adc-fffd-4f2f-bc1e-fbd16d6e9659_800x.png?v=1628098713", song_title="Red", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Taylor+Swift+-+RED+(Lyric+Video).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a81 = Library(artist_name="Taylor Swift", album_name="Red (Taylor's Version)", album_coverart_url="https://cdn.shopify.com/s/files/1/0011/4651/9637/products/GKg0cS-Y_dfc83adc-fffd-4f2f-bc1e-fbd16d6e9659_800x.png?v=1628098713", song_title="I Knew You Were Trouble", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Taylor+Swift+-+I+Knew+You+Were+Trouble+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a82 = Library(artist_name="Taylor Swift", album_name="Red (Taylor's Version)", album_coverart_url="https://cdn.shopify.com/s/files/1/0011/4651/9637/products/GKg0cS-Y_dfc83adc-fffd-4f2f-bc1e-fbd16d6e9659_800x.png?v=1628098713", song_title="All Too Well", song_url="https://moodify.s3.amazonaws.com/Heartbreak/All+Too+Well+_+Taylor+Swift+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())
  a83 = Library(artist_name="Taylor Swift", album_name="Red (Taylor's Version)", album_coverart_url="https://cdn.shopify.com/s/files/1/0011/4651/9637/products/GKg0cS-Y_dfc83adc-fffd-4f2f-bc1e-fbd16d6e9659_800x.png?v=1628098713", song_title="We Are Never Ever Getting Back Together", song_url="https://moodify.s3.amazonaws.com/Heartbreak/Taylor+Swift+-+We+Are+Never+Ever+Getting+Back+Together+(Lyrics).mp3", created_at=datetime.now(), updated_at=datetime.now())




# add more as needed,

  # Joan one through twentyseven
  # Katerina twentyeight through fortysix
  # Sai fortyseven through sixtyfive
  # Alex sixtysix through eightyfour






  # after last song instance
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
  db.session.add(twentytwo)
  db.session.add(twentythree)
  db.session.add(twentyfour)
  db.session.add(twentyfive)
  db.session.add(twentysix)
  db.session.add(twentyseven)

  db.session.add(fortyseven)
  db.session.add(fortyeight)
  db.session.add(fortynine)
  db.session.add(fifty)
  db.session.add(fiftyone)
  db.session.add(fiftytwo)
  db.session.add(fiftythree)
  db.session.add(fiftyfour)
  db.session.add(fiftyfive)
  db.session.add(fiftysix)
  db.session.add(fiftyseven)
  db.session.add(fiftyeight)
  db.session.add(fiftynine)
  db.session.add(sixty)
  db.session.add(sixtyone)
  db.session.add(sixtytwo)
  db.session.add(sixtythree)
  db.session.add(sixtyfour)

  db.session.add(a66)
  db.session.add(a67)
  db.session.add(a68)
  db.session.add(a69)
  db.session.add(a70)
  db.session.add(a71)
  db.session.add(a72)
  db.session.add(a73)
  db.session.add(a74)
  db.session.add(a75)
  db.session.add(a76)
  db.session.add(a77)
  db.session.add(a78)
  db.session.add(a79)
  db.session.add(a80)
  db.session.add(a81)
  db.session.add(a82)
  db.session.add(a83)
  # continue adding for all song instances once data is consolidated

  db.session.commit()


def undo_library():
  # this restarts everything that has been added
  db.session.execute('TRUNCATE library RESTART IDENTITY CASCADE;')
  db.session.commit()
