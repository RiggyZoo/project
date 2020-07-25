let numberOfFilm;

function start (){
    numberOfFilm = +prompt('How many films did you watch?', '');
    while (numberOfFilm == ''|| numberOfFilm == null || isNaN(numberOfFilm)){
        numberOfFilm = +prompt('How many films did you watch?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors:{},
    genres: [],
    privat: false
}



function rememberMyFilm() {
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
}
rememberMyFilm();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено слишком мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30){
        console.log('Вы - киноман');
    } else {
        console.log('Произошла ошибка')
    }
}
detectPersonalLevel();


function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres (){
    for (let i=1;i<=3;i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i-1] = genre
    }
}
writeYourGenres();


// if(personalMovieDB.count < 10) {
//     document.write('Просмотрено слишком мало фильмов');
// } else if (personalMovieDB.count > 10 && <30){
//
// }