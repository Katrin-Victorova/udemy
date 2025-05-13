const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	count: numberOfFilms,
	privat: false,
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?'),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d
// через movies.c не все данные запишуться

console.log(personalMovieDB)
