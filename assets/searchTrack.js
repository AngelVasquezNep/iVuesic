const seachTrack = (q) => {
  const url = 'https://platzi-music-api.now.sh/search?type=track&query=' 
  return fetch(`${url}${q}`)
    .then(res=>res.json())
    .then(json => json)
}

export default seachTrack