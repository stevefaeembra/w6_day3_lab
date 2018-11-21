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

Cinema.prototype.allFilmsLongerThan = function (lengthMinutes) {
  return this.films.every((film) => {
    return film.length > lengthMinutes;
  });
};

Cinema.prototype.getTotalRunningTime = function () {
  const reducer = (acc, item) => {
    return acc += item.length
  }
  return this.films.reduce(reducer,0)
};

Cinema.prototype.findAllMatching = function (property_name, property_value) {
  return this.films.filter((item) => {
    return item[property_name] === property_value;
  });
};
module.exports = Cinema;
