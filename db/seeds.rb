# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
PlaylistFollow.destroy_all
Genre.destroy_all
UserFollow.destroy_all
PlaylistSong.destroy_all

require 'open-uri'


#Users


demouser = User.create(username: 'demouser', email: 'demo@demo.com', password: '123456')
user2 = User.create(username: 'sophia', email: 'sophia@gmail.com', password: '123456')
user3 = User.create(username: 'michelle', email: 'michelle@gmail.com', password: '123456')
user4 = User.create(username: 'selam', email: 'selam@gmail.com', password: '123456')
user5 = User.create(username: 'phil', email: 'phil@gmail.com', password: '123456')
user6 = User.create(username: 'kavya', email: 'kavya@gmail.com', password: '123456')


# User follows

# user6.following << user2
# user6.following << user3
# user6.following << user4
# user6.following << user5

# user6.followers << user6
# user6.followers << user2
# user6.followers << user3

# Playlists

a = Playlist.create(title: 'Chill', creator_id: user6.id)

a_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/chill.jpg')
a.playlist_image.attach(io: a_pic, filename: 'a.jpg')
a.save!

b = Playlist.create(title: 'Summer', creator_id: user6.id)

b_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/summer.jpg')
b.playlist_image.attach(io: b_pic, filename: 'b.jpg')
b.save!

c = Playlist.create(title: 'Best of MJ', creator_id: user6.id)

c_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/mj_play.jpg')
c.playlist_image.attach(io: c_pic, filename: 'c.jpg')
c.save!

d = Playlist.create(title: 'Favorites', creator_id: user2.id)

d_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/faves.jpeg')
d.playlist_image.attach(io: d_pic, filename: 'd.jpg')
d.save!

e = Playlist.create(title: 'Pumped Pop', creator_id: user2.id)

e_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/pumped_pop.jpg')
e.playlist_image.attach(io: e_pic, filename: 'e.jpg')
e.save!

f = Playlist.create(title: 'Smooth', creator_id: user6.id)

f_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/smooth.jpg')
f.playlist_image.attach(io: f_pic, filename: 'f.jpg')
f.save!

# user6.followed_playlists << a
# user6.followed_playlists << c
# user6.followed_playlists << f

# Genre

pop = Genre.create(id: 1, name: 'Pop')
classic = Genre.create(id: 2, name: 'Classic')
rb = Genre.create(id: 3, name: 'R&B')

# Artists 

drake = Artist.create(id: 1, name: 'Drake', genre_id: 1 )

drake_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/drake_album.jpg')
drake.artist_image.attach(io: drake_pic, filename: 'drake.jpg')
drake.save!

majid = Artist.create(id: 2, name: 'Majid Jordan', genre_id: 3 )

majid_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/majid.jpg')
majid.artist_image.attach(io: majid_pic, filename: 'majid.jpg')
majid.save!

mj = Artist.create(id: 3, name: 'Michael Jackson', genre_id: 2 )

mj_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/mj.jpg')
mj.artist_image.attach(io: mj_pic, filename: 'mj.jpg')
mj.save!
travis = Artist.create(id: 4, name: 'Travis Scott', genre_id: 1 )


travis_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/travis.jpg')
travis.artist_image.attach(io: travis_pic, filename: 'mj.jpg')
travis.save!
# Albums

scorpion = Album.create( title: 'Scorpion', year: 2018, genre_id: 1, artist_id: 1)

scorpion_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/drake_album.jpg')
scorpion.album_image.attach(io: scorpion_pic, filename: 'scorpion.jpg')
scorpion.save!

astroworld = Album.create( title: 'Astroworld', year: 2018, genre_id: 1, artist_id: 4)

astro_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/astro_cover.jpg')
astroworld.album_image.attach(io: astro_pic, filename: 'astro.jpg')
astroworld.save!

spacebetween = Album.create( title: 'The Space Between', year: 2017, genre_id: 3, artist_id: 2)

sbw_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/sbw_cover.jpg')
spacebetween.album_image.attach(io: sbw_pic, filename: 'sbw.jpg')
spacebetween.save!

bad = Album.create( title: 'Bad', year: 1987, genre_id: 2, artist_id: 3)

bad_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/bad_cover.png')
bad.album_image.attach(io: bad_pic, filename: 'bad.jpg')
bad.save!

gottobethere = Album.create( title: 'Got To Be There', year: 1972, genre_id: 2, artist_id: 3)

g2bthere_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/g2bthere_cover.jpg')
gottobethere.album_image.attach(io: g2bthere_pic, filename: 'g2bthere.jpg')
gottobethere.save!

offthewall = Album.create( title: 'Off The Wall', year: 1979, genre_id: 2, artist_id: 3)

offthewall_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/offthewall_cover.jpg')
offthewall.album_image.attach(io: offthewall_pic, filename: 'offthewall.jpg')
offthewall.save!

thriller = Album.create( title: 'Thriller', year: 1983, genre_id: 2, artist_id: 3)

thriller_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/thriller_cover.jpg')
thriller.album_image.attach(io: thriller_pic, filename: 'thriller.jpg')
thriller.save!

pipesofpeace = Album.create( title: 'Pipes of Peace', year: 1983, genre_id: 2, artist_id: 3)

pop_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/pop_cover.jpg')
pipesofpeace.album_image.attach(io: pop_pic, filename: 'pop.jpg')
pipesofpeace.save!
# Songs

song_1 = Song.create(title: "Survival", album_id: scorpion.id, genre_id: 1,  duration: "2:16" )
song_2 = Song.create(title: "Nonstop", album_id: scorpion.id, genre_id: 1,  duration: "3:58" )
song_3 = Song.create(title: "Elevate", album_id: scorpion.id, genre_id: 1,  duration: "3:04" )
song_4 = Song.create(title: "Emotionless", album_id: scorpion.id, genre_id: 1,  duration: "5:02" )
song_5 = Song.create(title: "God's Plan", album_id: scorpion.id, genre_id: 1,  duration: "3:18" )
song_6 = Song.create(title: "I'm Upset", album_id: scorpion.id, genre_id: 1,  duration: "3:34" )
song_7 = Song.create(title: "8 Out Of 10", album_id: scorpion.id, genre_id: 1,  duration: "3:15" )
song_8 = Song.create(title: "Mob Ties", album_id: scorpion.id, genre_id: 1,  duration: "3:25" )
song_9 = Song.create(title: "Can't Take A Joke", album_id: scorpion.id, genre_id: 1,  duration: "2:43" )
song_10 = Song.create(title: "Sandra's Rose", album_id: scorpion.id, genre_id: 1,  duration: "3:36" )
song_11 = Song.create(title: "Talk Up (feat. Jay-Z)", album_id: scorpion.id, genre_id: 1,  duration: "3:43" )
song_12 = Song.create(title: "Is There More", album_id: scorpion.id, genre_id: 1,  duration: "3:46" )
song_13 = Song.create(title: "Peak", album_id: scorpion.id, genre_id: 1,  duration: "3:26" )
song_14 = Song.create(title: "Summer Games", album_id: scorpion.id, genre_id: 1,  duration: "4:07" )
song_15 = Song.create(title: "Jaded", album_id: scorpion.id, genre_id: 1,  duration: "4:22" )
song_16 = Song.create(title: "Nice For What", album_id: scorpion.id, genre_id: 1,  duration: "3:30" )
song_17 = Song.create(title: "Finesse", album_id: scorpion.id, genre_id: 1,  duration: "3:02" )
song_18 = Song.create(title: "Ratchet Happy Birthday", album_id: scorpion.id, genre_id: 1,  duration: "3:27" )
song_19 = Song.create(title: "That's How You Feel", album_id: scorpion.id, genre_id: 1,  duration: "2:37" )
song_20 = Song.create(title: "Blue Tint", album_id: scorpion.id, genre_id: 1,  duration: "2:42" )
song_21 = Song.create(title: "In My Feelings", album_id: scorpion.id, genre_id: 1,  duration: "3:37" )
song_22 = Song.create(title: "Don't Matter To Me (with Michael Jackson)", album_id: scorpion.id, genre_id: 1,  duration: "4:05" )
song_23 = Song.create(title: "After Dark (feat. Static Major & Ty Dolla $ign)", album_id: scorpion.id, genre_id: 1,  duration: "4:49" )
song_24 = Song.create(title: "Final Fantasy", album_id: scorpion.id, genre_id: 1,  duration: "3:39" )
song_25 = Song.create(title: "March 14", album_id: scorpion.id, genre_id: 1,  duration: "5:09" )

song_26 = Song.create(title: "STARGAZING", album_id: astroworld.id, genre_id: 1,  duration: "4:30" )
song_27 = Song.create(title: "CAROUSEL", album_id: astroworld.id, genre_id: 1,  duration: "3:00" )
song_28 = Song.create(title: "SICKO MODE", album_id: astroworld.id, genre_id: 1,  duration: "5:12" )
song_29 = Song.create(title: "R.I.P. SCREW", album_id: astroworld.id, genre_id: 1,  duration: "3:05" )
song_30 = Song.create(title: "STOP TRYING TO BE GOD", album_id: astroworld.id, genre_id: 1,  duration: "5:38" )
song_31 = Song.create(title: "NO BYSTANDERS", album_id: astroworld.id, genre_id: 1,  duration: "3:38" )
song_32 = Song.create(title: "SKELETONS", album_id: astroworld.id, genre_id: 1,  duration: "2:25" )
song_33 = Song.create(title: "WAKE UP", album_id: astroworld.id, genre_id: 1,  duration: "3:51" )
song_34 = Song.create(title: "5% TINT", album_id: astroworld.id, genre_id: 1,  duration: "3:16" )
song_35 = Song.create(title: "NC-17", album_id: astroworld.id, genre_id: 1,  duration: "2:36" )
song_36 = Song.create(title: "ASTROTHUNDER", album_id: astroworld.id, genre_id: 1,  duration: "2:2`2" )
song_37 = Song.create(title: "YOSEMITE", album_id: astroworld.id, genre_id: 1,  duration: "2:30" )
song_38 = Song.create(title: "CAN'T SAY", album_id: astroworld.id, genre_id: 1,  duration: "3:18" )
song_39 = Song.create(title: "WHO? WHAT!", album_id: astroworld.id, genre_id: 1,  duration: "2:56" )
song_40 = Song.create(title: "BUTTERFLY EFFECT", album_id: astroworld.id, genre_id: 1,  duration: "3:10" )
song_41 = Song.create(title: "HOUSTONFORNICATION", album_id: astroworld.id, genre_id: 1,  duration: "3:37" )
song_42 = Song.create(title: "COFFEE BEAN", album_id: astroworld.id, genre_id: 1,  duration: "3:29" )

#PlaylistSongs

a.songs << song_1
a.songs << song_2
a.songs << song_3
a.songs << song_4
a.songs << song_5

b.songs << song_6
b.songs << song_7
b.songs << song_8
b.songs << song_9
b.songs << song_10