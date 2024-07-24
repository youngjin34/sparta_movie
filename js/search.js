import { movies } from './movie.js';

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn")
const searchBtnVisible = document.querySelector("#searchBtnVisible");
const searchContainer = document.querySelector("#search-container");

const header = document.querySelector("#header");

header.addEventListener("click", () => {
  window.location.reload();
});

searchBtnVisible.addEventListener("click", (e) => {
  e.preventDefault();
  searchContainer.classList.toggle("visible");
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = searchInput.value.toLowerCase();
  if (value === "") {
    alert("검색어를 입력해주세요.");
    searchInput.focus();
    return;
  };

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(value));

  const searchMovie = document.querySelector("#movie-card");
  searchMovie.innerHTML = "";

  if (filteredMovies.length === 0) {
    alert("검색 결과가 없습니다.");
    searchInput.focus();
    return;
  }

  filteredMovies.forEach(movie => {
    console.log(movie);
    const filteredMovie = document.createElement("div");
    filteredMovie.classList.add("movie");

    filteredMovie.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} 포스터">
    <h2>${movie.title}</h2>
    <p>평점: ${movie.vote_average}</p>
    <p>${movie.overview}</p>
    `;
    searchMovie.appendChild(filteredMovie);
  });
});