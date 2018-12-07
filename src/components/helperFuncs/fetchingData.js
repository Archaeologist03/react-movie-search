// Getting object based on input(query), which is transformd into url for first fetch, and then using id it for second fetch to retrive object with more movie data.
// idCallback is movieIdSearch helper func, used to get url with id (getting more info on movie)

async function fethcingData(url, idCallback) {
  let movieID = await fetch(url)
    .then(data => data.json())
    .then(movies => movies.results[0].id);

  let movie = await fetch(idCallback(movieID))
    .then(data => data.json())
    .then(movie => movie);

  return movie;
}


export default fethcingData;