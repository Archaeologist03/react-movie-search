function movieIdSearch(id) {
  const apiKey = "a41a4e3e739765a22f2879e570c3e4db";

  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
} 

export default movieIdSearch;