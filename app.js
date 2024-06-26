/**
 * Урок 19. Практика ч1
 */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/**
 * Урок 24. Практика ч2
 */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/**
 * 29. Практика , ч3. Используем функции
 */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    do {
        numberOfFilms = prompt("How many movies have you seen?", "0");
    } while (numberOfFilms === null || numberOfFilms.trim() === "" || isNaN(numberOfFilms));
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        // alert("Iteration " + i);
        const lastMovie = prompt("What is the last movie you have seen?", "");
        const lastMovieRate = prompt("How much would you rate it?", "");

        if (
            lastMovie === null ||
            lastMovieRate === null ||
            lastMovie.trim() === "" ||
            lastMovieRate.trim() === "" ||
            lastMovie.trim().length > 50 ||
            isNaN(lastMovieRate)
        ) {
            alert("Error: missing data");
            i--;
            continue;
        }

        personalMovieDB.movies[lastMovie] = lastMovieRate;
    }
}

// |----------------------------------------------------------------------------------------------------------|
// |----------------------------------- Solved with another two cycles ---------------------------------------|
// |----------------------------------------------------------------------------------------------------------|
/**
 * while cycle
 */

// let i = 0;

// while (i < 2) {
//     alert("Iteration " + i);
// 	const lastMovie = prompt("What is the last movie you have seen?", "");
// 	const lastMovieRate = prompt("How much would you rate it?", "");

//     if (
//         lastMovie === null
//         || lastMovieRate === null
//         || lastMovie.trim() === ""
//         || lastMovieRate.trim() === ""
//         || lastMovie.trim().length > 50
//         || isNaN(lastMovieRate)
//     ) {
//         alert("Error: missing data");
//         continue;
//     }

//     personalMovieDB.movies[lastMovie] = lastMovieRate;
//     i++;
// }

/**
 * Cycle do-while
 */

// let i = 0;

// do {
//     alert("Iteration do-while " + i);
// 	const lastMovie = prompt("What is the last movie you have seen?", "");
// 	const lastMovieRate = prompt("How much would you rate it?", "");

//     if (
//         lastMovie === null
//         || lastMovieRate === null
//         || lastMovie.trim() === ""
//         || lastMovieRate.trim() === ""
//         || lastMovie.trim().length > 50
//         || isNaN(lastMovieRate)
//     ) {
//         alert("Error: missing data");
//         continue;
//     }

//     personalMovieDB.movies[lastMovie] = lastMovieRate;
//     i++;
// }
// while (i < 2);


function writeYourGenres (obj) {
    for (let i = 0; i < 3; i++) {
        alert("Iteration " + i);
        const genre = prompt("Write you favorite genre at number " + (i + 1), "");

        if (genre === null || genre.trim() === "" || isFinite(genre) || genre.trim().length > 50) {
            alert("Error: wrong data. Check your input data and try again");
            i--;
            continue;
        }

        obj.genres.push(genre);
    }

}

// writeYourGenres(personalMovieDB);

function detectPersonalLevel (obj) {
    if (obj.count < 10) {
        alert("You have watched very few movies");
    } else if (obj.count >= 10 && obj.count < 30) {
        alert("You are a classic movie watcher");
    } else if (obj.count >= 30) {
        alert("You are a movie buff");
    } else {
        alert("We have got an error");
    }
}
personalMovieDB.privat = true;
function showMyDB (obj) {
    obj.privat || console.log(obj);
}

showMyDB(personalMovieDB);