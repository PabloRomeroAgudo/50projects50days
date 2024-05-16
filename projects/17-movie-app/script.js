/* eslint-disable no-unused-vars */
const response = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/lLh39Th5plbrQgbQ4zyIULsd0Pp.jpg',
      genre_ids: [878, 28, 12],
      id: 823464,
      original_language: 'en',
      original_title: 'Godzilla x Kong: The New Empire',
      overview: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 3384.641,
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
      video: false,
      vote_average: 6.96,
      vote_count: 1377
    },
    {
      adult: false,
      backdrop_path: '/fypydCipcWDKDTTCoPucBsdGYXW.jpg',
      genre_ids: [878, 12, 28],
      id: 653346,
      original_language: 'en',
      original_title: 'Kingdom of the Planet of the Apes',
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      popularity: 2372.67,
      poster_path: '/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
      release_date: '2024-05-08',
      title: 'Kingdom of the Planet of the Apes',
      video: false,
      vote_average: 7.3,
      vote_count: 323
    },
    {
      adult: false,
      backdrop_path: '/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg',
      genre_ids: [878, 27, 28],
      id: 940721,
      original_language: 'ja',
      original_title: 'ゴジラ-1.0',
      overview: 'Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.',
      popularity: 1895.443,
      poster_path: '/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      release_date: '2023-11-03',
      title: 'Godzilla Minus One',
      video: false,
      vote_average: 7.673,
      vote_count: 1009
    }
  ],
  total_pages: 44180,
  total_results: 883590
}

const container = document.querySelector('.container')
const search = document.querySelector('.search')
const form = document.querySelector('.form')

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (search.value.trim() !== '' && search.value) {
    mapMovies(SEARCH_API + search.value + '"')
    search.value = ''
  } else {
    mapMovies(API_URL)
  }
})

const getMovies = async (api) => {
  return await fetch(api)
    .then((response) => response.json())
}

const mapMovies = (api) => {
  getMovies(api).then(movies => {
    container.innerHTML = ''
    movies.results.map(movie => {
      container.innerHTML +=
      `
      <section class="movie">
        <img src="${IMG_PATH + movie.poster_path}" alt='Poster of the movie "${movie.title}"'/>

        <footer>
          <h3>${movie.title}</h3>
          <span class="vote" ${movie.vote_average < 8 ? 'style="color: orange"' : ''}>${movie.vote_average}</span>
        </footer>

        <div class="overview">
          <h3>Overview</h3>
          <p>${movie.overview}</p>
        </div>
      </section>
      `

      return null
    })
  })
}

mapMovies(API_URL)
