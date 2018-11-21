const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  })
};

Cinema.prototype.getFilmByTitle = function (filmTitle) {
  return this.films.find((film) => {
    return film.title === filmTitle;
  });
};

Cinema.prototype.getFilmsByGenre= function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.hasFilmsForYear= function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

module.exports = Cinema;
