
let numberOfFilm = +prompt('How many films did you watch?', '');


let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors:{},
    genres: [],
    privat: false
}

const lastFilm = prompt('Один из послдених фильмов которые вы посмотрели?','');
const scoreOfFilm = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[lastFilm]= scoreOfFilm;

console.log(personalMovieDB)

console.log(personalMovieDB.count)

