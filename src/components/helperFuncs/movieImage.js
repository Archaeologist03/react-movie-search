function movieImage(imgUrl, size = "original") {
  return `https://image.tmdb.org/t/p/${size}/${imgUrl}`;
}

export default movieImage;
