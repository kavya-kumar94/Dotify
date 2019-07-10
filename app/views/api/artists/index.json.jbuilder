# json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :name, :id
      if artist.artist_image.attached?
        json.artist_image url_for(artist.artist_image.photo)
      else
        json.artist_image ""
      end

    
    end
  end
# end