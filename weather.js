
let personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films did you watch?', '');
            while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                personalMovieDB.count = +prompt('How many films did you watch?', '');
                 }
                 },
    rememberMyFilm: function () {
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
                             },
    detectPersonalLevel: ()=>{
                        if (personalMovieDB.count < 10) {
                             console.log ('Просмотрено слишком мало фильмов')
                          } else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
                             console.log('Вы классический зритель');
                              } else if (personalMovieDB.count >=30){
                                console.log('Вы - киноман');
                            } else {
                                 console.log('Произошла ошибка')
                                 }
                                    },
    showMyDB: (hidden)=>{
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function () {
        for (let i=1;i<=3;i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == ''|| genre == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres[i-1]= genre
            }
        }
      personalMovieDB.genres.forEach((item,i)=>{
          console.log(`Любимы жанр ${i+1} - это ${item}`);
      })
        },
    toggleVisibleMyDB: ()=> {
        if (personalMovieDB.privat === false){
            personalMovieDB.privat = true
        } else if (personalMovieDB.privat === true){
            personalMovieDB.privat = false
        }
    }

}
