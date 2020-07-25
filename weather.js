
let numberOfFilm = +prompt('How many films did you watch?', '');


let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors:{},
    genres: [],
    privat: false
}

for (let i = 0; i<2;i++){
    const lastFilm = prompt('Один из послдених фильмов которые вы посмотрели?','');
    const scoreOfFilm = prompt('На сколько вы его оцените?', '');
    if (lastFilm != null &&  scoreOfFilm != null && lastFilm !='' && scoreOfFilm != ''&& lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm]= scoreOfFilm;
        console.log ('done')
    } else {
        console.log ('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ('Просмотрено слишком мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30){
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB)

console.log(personalMovieDB.count)

// if(personalMovieDB.count < 10) {
//     document.write('Просмотрено слишком мало фильмов');
// } else if (personalMovieDB.count > 10 && <30){
//
// }