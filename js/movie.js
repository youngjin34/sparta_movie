const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRjZGE3MTliMTcwMGM0Yjc4OTZlYmRkM2NlMDM5NyIsIm5iZiI6MTcyMTY0NTkyMS4zODE1MzcsInN1YiI6IjY2OWUzOTcxYTY5MGYyY2YzYzg4MzRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJ2WO91fXD025e9-uxgGHwGpkjgZCmlsZIkn4hkpsuI'
  }
};

export let movies = [];

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    movies = data.results;
    console.log(movies);
    const movieCard = document.querySelector("#movie-card");
    data.results.forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} 포스터">
        <h2>${movie.title}</h2>
        <p><b>개봉일:</b> ${movie.release_date}</p>
        <p><b>평점:</b> ${movie.vote_average}</p>
        <p>${movie.overview}</p>
      `;

      movieCard.appendChild(movieElement);
    });
  })
  .catch(err => console.error(err));
