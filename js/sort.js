import { movies } from './movie.js';

const sortSelect = document.querySelector("#sort");

function displayMovies(sortedMovies) {
  const movieCard = document.querySelector("#movie-card");
  movieCard.innerHTML = "";
  sortedMovies.forEach(movie => {
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

    movieElement.addEventListener("click", () => {
      alert(`영화 id: ${movie.id}`);
    });
  });
}

function sortMovies() {
  const sortValue = sortSelect.value;

  let sortedMovies = [...movies];

  if (sortValue === "point") {
    sortedMovies.sort((a, b) => b.vote_average - a.vote_average); // 내림차순으로 정렬
  } else if (sortValue === "recent-release_date") {
    sortedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)); // 내림차순으로 정렬
  } else if (sortValue === "old-release_date") {
    sortedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date)); // 내림차순으로 정렬
  }

  displayMovies(sortedMovies);
}

// 초기 로드 시 정렬 선택된 옵션에 맞게 정렬
sortSelect.addEventListener("change", sortMovies);

// 처음 페이지 로드 시 정렬된 영화 리스트를 보여줍니다.
document.addEventListener("DOMContentLoaded", () => {
  sortMovies();
});
