# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
Playlist.destroy_all
PlaylistFollow.destroy_all
Genre.destroy_all
UserFollow.destroy_all
Like.destroy_all
PlaylistSong.destroy_all



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
g = Playlist.create(title: 'TSwift', creator_id: user6.id)

g_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/tswift.jpg')
g.playlist_image.attach(io: g_pic, filename: 'g.jpg')
g.save!

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

e_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/pumppop2.jpg')
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

taylor = Artist.create(id: 5, name: 'Taylor Swift', genre_id: 1)
taylor_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/taylor_swift.jpg')
taylor.artist_image.attach(io: taylor_pic, filename: 'taylor.jpg')
taylor.save!

kanye = Artist.create(id: 6, name: 'Kanye', genre_id: 3)
kanye_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/kanye.jpg')
kanye.artist_image.attach(io: kanye_pic, filename: 'kanye.jpg')
kanye.save!

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

lover = Album.create(title: 'Lover', year: 2019, genre_id: 1, artist_id: 5)
lover_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/taylor_swift.jpg')
lover.album_image.attach(io: lover_pic, filename: 'lover.jpg')
lover.save!


astroworld = Album.create( title: 'Astroworld', year: 2018, genre_id: 1, artist_id: 4)

astro_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/astro_cover.jpg')
astroworld.album_image.attach(io: astro_pic, filename: 'astro.jpg')
astroworld.save!

jik = Album.create(title: 'Jesus is King', year: 2019, genre_id: 3, artist_id: 6)
jik_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/jik3.jpg')
jik.album_image.attach(io: jik_pic, filename: 'jik3.jpg')
jik.save!

scorpion = Album.create( title: 'Scorpion', year: 2018, genre_id: 1, artist_id: 1)
scorpion_pic = open('https://dotify-app-dev.s3-us-west-1.amazonaws.com/drake_album.jpg')
scorpion.album_image.attach(io: scorpion_pic, filename: 'scorpion.jpg')
scorpion.save!

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
song_36 = Song.create(title: "ASTROTHUNDER", album_id: astroworld.id, genre_id: 1,  duration: "2:22" )
song_37 = Song.create(title: "YOSEMITE", album_id: astroworld.id, genre_id: 1,  duration: "2:30" )
song_38 = Song.create(title: "CAN'T SAY", album_id: astroworld.id, genre_id: 1,  duration: "3:18" )
song_39 = Song.create(title: "WHO? WHAT!", album_id: astroworld.id, genre_id: 1,  duration: "2:56" )
song_40 = Song.create(title: "BUTTERFLY EFFECT", album_id: astroworld.id, genre_id: 1,  duration: "3:10" )
song_41 = Song.create(title: "HOUSTONFORNICATION", album_id: astroworld.id, genre_id: 1,  duration: "3:37" )
song_42 = Song.create(title: "COFFEE BEAN", album_id: astroworld.id, genre_id: 1,  duration: "3:29" )


song_43 = Song.create(title: "Intro", album_id: spacebetween.id, genre_id: 3, duration: "1:07" )
song_44 = Song.create(title: "Gave Your Love Away", album_id: spacebetween.id, genre_id: 3, duration: "4:45" )
song_45 = Song.create(title: "OG Heartthrob", album_id: spacebetween.id, genre_id: 3, duration: "4:28" )
song_46 = Song.create(title: "Body Talk", album_id: spacebetween.id, genre_id: 3, duration: "3:27" )
song_47 = Song.create(title: "Not Ashamed", album_id: spacebetween.id, genre_id: 3, duration: "4:00" )
song_48 = Song.create(title: "One I Want (feat. PARTYNEXTDOOR)", album_id: spacebetween.id, genre_id: 3, duration: "3:32" )
song_49 = Song.create(title: "You", album_id: spacebetween.id, genre_id: 3, duration: "5:42" )
song_50 = Song.create(title: "Phases", album_id: spacebetween.id, genre_id: 3, duration: "3:37" )
song_51 = Song.create(title: "Asleep", album_id: spacebetween.id, genre_id: 3, duration: "3:49" )
song_52 = Song.create(title: "What You Do to Me", album_id: spacebetween.id, genre_id: 3, duration: "3:36" )
song_53 = Song.create(title: "My Imagination (feat. dvsn)", album_id: spacebetween.id, genre_id: 3, duration: "3:45" )
song_54 = Song.create(title: "The Space Between", album_id: spacebetween.id, genre_id: 3, duration: "3:25" )
song_55 = Song.create(title: "Outro", album_id: spacebetween.id, genre_id: 3, duration: "4:21" )

song_56 = Song.create(title: "I Just Can't Stop Loving You", album_id: bad.id, genre_id: 2, duration: "4:13")
song_57 = Song.create(title: "I Wanna Be Where You Are", album_id: gottobethere.id, genre_id: 2, duration: "3:05")
song_58 = Song.create(title: "Rock With You", album_id: offthewall.id, genre_id: 2, duration: "3:22")
song_59 = Song.create(title: "Wanna Be Startin' Somethin", album_id: thriller.id, genre_id: 2, duration: "6:00")
song_60 = Song.create(title: "Say Say Say", album_id: pipesofpeace.id, genre_id: 2, duration: "3:50")

song_61 = Song.create(title: "I Forgot That You Existed", album_id: lover.id, genre_id: 1, duration: "2:52")
song_62 = Song.create(title: "Cruel Summer", album_id: lover.id, genre_id: 1, duration: "3:00")
song_63 = Song.create(title: "Lover", album_id: lover.id, genre_id: 1, duration: "3:58")
song_64 = Song.create(title: "The Man", album_id: lover.id, genre_id: 1, duration: "3:11")
song_65 = Song.create(title: "The Archer", album_id: lover.id, genre_id: 1, duration: "3:39")
song_66 = Song.create(title: "I Think He Knows", album_id: lover.id, genre_id: 1, duration: "2:54")
song_67 = Song.create(title: "Miss Americana and the Heartbreak Prince", album_id: lover.id, genre_id: 1, duration: "3:55")
song_68 = Song.create(title: "Paper Rings", album_id: lover.id, genre_id: 1, duration: "3:43")
song_69 = Song.create(title: "Cornelia Street", album_id: lover.id, genre_id: 1, duration: "4:48")
song_70 = Song.create(title: "Death by a Thousand Cuts", album_id: lover.id, genre_id: 1, duration: "3:19")
song_71 = Song.create(title: "London Boy", album_id: lover.id, genre_id: 1, duration: "3:11")
song_72 = Song.create(title: "Afterglow", album_id: lover.id, genre_id: 1, duration: "3:44")
song_73 = Song.create(title: "Daylight", album_id: lover.id, genre_id: 1, duration: "4:54")

song_74 = Song.create(title: "Every Hour", album_id: jik.id, genre_id: 3, duration: "1:52")
song_75 = Song.create(title: "Selah", album_id: jik.id, genre_id: 3, duration: "2:45")
song_76 = Song.create(title: "Follow God", album_id: jik.id, genre_id: 3, duration: "1:45")
song_77 = Song.create(title: "Closed On Sunday", album_id: jik.id, genre_id: 3, duration: "2:32")
song_78 = Song.create(title: "On God", album_id: jik.id, genre_id: 3, duration: "2:17")
song_79 = Song.create(title: "Everything We Need", album_id: jik.id, genre_id: 3, duration: "1:57")
song_80 = Song.create(title: "Water", album_id: jik.id, genre_id: 3, duration: "2:49")
song_81 = Song.create(title: "God Is", album_id: jik.id, genre_id: 3, duration: "3:24")
song_82 = Song.create(title: "Hands On", album_id: jik.id, genre_id: 3, duration: "3:24")
song_83 = Song.create(title: "Use This Gospel", album_id: jik.id, genre_id: 3, duration: "3:34")



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

c.songs << song_56
c.songs << song_57
c.songs << song_58
c.songs << song_59
c.songs << song_60

g.songs << song_61
g.songs << song_62
g.songs << song_63
g.songs << song_64
g.songs << song_65
g.songs << song_66

# Song AWS

song_1.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-01%2BSurvival.mp3"), filename: "1-01 Survival.mp3")
song_2.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-02%2BNonstop.mp3"), filename: "1-02 Nonstop.mp3")
song_3.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-03%2BElevate.mp3"), filename: "1-03 Elevate.mp3")
song_4.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-04%2BEmotionless.mp3"), filename: "1-04 Emotionless.mp3")
song_5.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-05%2BGod's%2BPlan.mp3"), filename: "1-05 God's Plan.mp3")
song_6.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-06%2BI'm%2BUpset.mp3"), filename: "1-06 I'm Upset.mp3")
song_7.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-07%2B8%2BOut%2BOf%2B10.mp3"), filename: "1-07 8 Out Of 10.mp3")
song_8.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-08%2BMob%2BTies.mp3"), filename: "1-08 Mob Ties.mp3")
song_9.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-09%2BCan't%2BTake%2Ba%2BJoke.mp3"), filename: "1-09 Can't Take a Joke.mp3")
song_10.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-10%2BSandra's%2BRose.mp3"), filename: "1-10 Sandra's Rose.mp3")
song_11.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-11%2BTalk%2BUp%2B(feat.%2BJAY-Z).mp3"), filename: "1-11 Talk Up (feat. JAY-Z).mp3")
song_12.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/1-12%2BIs%2BThere%2BMore.mp3"), filename: "1-12 Is There More.mp3")
song_13.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/17.%2BCOFFEE%2BBEAN.mp3"), filename: "2-01 Peak.mp3")
song_14.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-02%2BSummer%2BGames.mp3"), filename: "2-02 Summer Games.mp3")
song_15.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-03%2BJaded.mp3"), filename: "2-03 Jaded.mp3")
song_16.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-04%2BNice%2BFor%2BWhat.mp3"), filename: "2-04 Nice For What.mp3")
song_17.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-05%2BFinesse.mp3"), filename: "2-05 Finesse.mp3")
song_18.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-06%2BRatchet%2BHappy%2BBirthday.mp3"), filename: "2-06 Ratchet Happy Birthday.mp3")
song_19.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-07%2BThat's%2BHow%2BYou%2BFeel.mp3"), filename: "2-07 That's How You Feel.mp3")
song_20.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-08-Blue-Tint.mp3"), filename: "2-08-Blue-Tint.mp3")
song_21.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-09-In-My-Feelings.mp3"), filename: "2-09-In-My-Feelings.mp3")
song_22.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-10%2BDon't%2BMatter%2Bto%2BMe%2B(feat.%2BMichael%2BJackson).mp3"), filename: "2-10 Don't Matter to Me (feat. Michael Jackson).mp3")
song_23.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-11%2BAfter%2BDark%2B(feat.%2BStatic%2BMajor%2B%26%2BTy%2BDolla%2B%24ign).mp3"), filename: "2-11 After Dark (feat. Static Major & Ty Dolla $ign).mp3")
song_24.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-12%2BFinal%2BFantasy.mp3"), filename: "2-12 Final Fantasy.mp3")
song_25.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-13%2BMarch%2B14.mp3"), filename: "2-13 March 14.mp3")

song_26.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/01.%2BSTARGAZING.mp3"), filename: "01. STARGAZING.mp3")
song_27.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/02.%2BCAROUSEL.mp3"), filename: "02. CAROUSEL.mp3")
song_28.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/03.%2BSICKO%2BMODE.mp3"), filename: "03. SICKO MODE.mp3")
song_29.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/04.%2BR.I.P.%2BSCREW.mp3"), filename: "04. R.I.P. SCREW.mp3")
song_30.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/05.%2BSTOP%2BTRYING%2BTO%2BBE%2BGOD.mp3"), filename: "05. STOP TRYING TO BE GOD.mp3")
song_31.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/06.%2BNO%2BBYSTANDERS.mp3"), filename: "06. NO BYSTANDERS.mp3")
song_32.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/07.%2BSKELETONS.mp3"), filename: "07. SKELETONS.mp3")
song_33.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/08.%2BWAKE%2BUP.mp3"), filename: "08. WAKE UP.mp3")
song_34.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/09.%2B5%25%2BTINT.mp3"), filename: "09. 5% TINT.mp3")
song_35.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/10.%2BNC-17.mp3"), filename: "10. NC-17.mp3")
song_36.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/11.%2BASTROTHUNDER.mp3"), filename: "11. ASTROTHUNDER.mp3")
song_37.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/12.%2BYOSEMITE.mp3"), filename: "12. YOSEMITE.mp3")
song_38.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/13.%2BCAN'T%2BSAY.mp3"), filename: "13. CAN'T SAY.mp3")
song_39.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/14.%2BWHO%C2%BF%2BWHAT!.mp3"), filename: "14. WHO¿ WHAT!.mp3")
song_40.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/15.%2BBUTTERFLY%2BEFFECT.mp3"), filename: "15. BUTTERFLY EFFECT.mp3")
song_41.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/16.%2BHOUSTONFORNICATION.mp3"), filename: "16. HOUSTONFORNICATION.mp3")
song_42.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/17.%2BCOFFEE%2BBEAN.mp3"), filename: "17. COFFEE BEAN.mp3")

song_43.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/01%2BIntro.mp3"), filename: "01+Intro.mp3")
song_44.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/02%2BGave%2BYour%2BLove%2BAway.mp3"), filename: "02+Gave+Your+Love+Away.mp3")
song_45.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/03%2BOG%2BHeartthrob.mp3"), filename: "03+OG+Heartthrob.mp3")
song_46.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/04%2BBody%2BTalk.mp3"), filename: "04+Body+Talk.mp3")
song_47.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/05%2BNot%2BAshamed.mp3"), filename: "05+Not+Ashamed.mp3")
song_48.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/06%2BOne%2BI%2BWant%2B(feat.%2BPARTYNEXTDOOR).mp3"), filename: "06+One+I+Want+(feat.+PARTYNEXTDOOR).mp3")
song_49.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/07%2BYou.mp3"), filename: "07+You.mp3")
song_50.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/08%2BPhases.mp3"), filename: "08+Phases.mp3")
song_51.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/09%2BAsleep.mp3"), filename: "09+Asleep.mp3")
song_52.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/10%2BWhat%2BYou%2BDo%2Bto%2BMe.mp3"), filename: "10+What+You+Do+to+Me.mp3")
song_53.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/11%2BMy%2BImagination%2B(feat.%2Bdvsn).mp3"), filename: "11+My+Imagination+(feat.+dvsn).mp3")
song_54.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/12%2BThe%2BSpace%2BBetween.mp3"), filename: "12+The+Space+Between.mp3")
song_55.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/13%2BOutro.mp3"), filename: "13+Outro.mp3")


song_56.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BI%2BJust%2BCan't%2BStop%2BLoving%2BYou%2B(Clean).mp3"), filename: "cantstop.mp3")
song_57.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BI%2BWanna%2BBe%2BWhere%2BYou%2BAre%2B(Clean)%2B(Extended).mp3"), filename: "wannabe.mp3")
song_58.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BRock%2BWith%2BYou%2B(Clean).mp3"), filename: "rockwithyou.mp3")
song_59.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BSpead%2BDemon%2B(Extended).mp3"), filename: "speeddemon.mp3")
song_60.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BWanna%2BBe%2BStartin'%2BSomethin'%2B(Clean).mp3"), filename: "startin.mp3")

song_61.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+I+Forgot+That+You+Existed.mp3"), filename: "Taylor Swift - I Forgot That You Existed.mp3")
song_62.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Cruel+Summer.mp3"), filename: "Taylor Swift - Cruel Summer.mp3")
song_63.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Lover.mp3"), filename: "Taylor Swift - Lover.mp3")
song_64.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+The+Man.mp3"), filename: "Taylor Swift - The Man.mp3")
song_65.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+The+Archer.mp3"), filename: "Taylor Swift - The Archer.mp3")
song_66.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+I+Think+He+Knows.mp3"), filename: "Taylor Swift - I Think He Knows.mp3")
song_67.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Miss+Americana+%26+The+Heartbreak+Prince.mp3"), filename: "Taylor Swift - Miss Americana & The Heartbreak Prince.mp3")
song_68.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Paper+Rings.mp3"), filename: "Taylor Swift - Paper Rings.mp3")
song_69.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Cornelia+Street.mp3"), filename: "Taylor Swift - Cornelia Street.mp3")
song_70.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Death+By+A+Thousand+Cuts.mp3"), filename: "Taylor Swift - Death By A Thousand Cuts.mp3")
song_71.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+London+Boy.mp3"), filename: "Taylor Swift - London Boy.mp3")
song_72.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Afterglow.mp3"), filename: "Taylor Swift - Afterglow.mp3")
song_73.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Taylor+Swift+-+Daylight.mp3"), filename: "Taylor Swift - Daylight.mp3")

song_74.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Every+Hour.mp3"), filename: "Every Hour.mp3")
song_75.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Selah.mp3"), filename: "Selah.mp3")
song_76.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Kanye+West+-+Follow+God.mp3"), filename: "Kanye West - Follow God.mp3")
song_77.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Closed+On+Sunday.mp3"), filename: "Closed On Sunday.mp3")
song_78.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/On+God.mp3"), filename: "On God.mp3")
song_79.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Everything+We+Need.mp3"), filename: "Everything We Need.mp3")
song_80.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Water.mp3"), filename: "Water.mp3")
song_81.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/God+Is.mp3"), filename: "God Is.mp3")
song_82.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Hands+On.mp3"), filename: "Hands On.mp3")
song_83.audio.attach(io: open("https://dotify-app-dev.s3-us-west-1.amazonaws.com/new_music/Use+This+Gospel.mp3"), filename: "Use This Gospel.mp3")
