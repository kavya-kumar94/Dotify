@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :name, :id
    # if artist.photo.attached?
    #   json.image_url url_for(artist.photo)
    # end
  end
end