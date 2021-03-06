const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const expected = [moonlight.title, bladeRunner.title, dunkirk.title, blackPanther.title, trainspotting.title];
    const actual = cinema.getFilmTitles();
    assert.deepStrictEqual(actual,expected);
  });


  it('should be able to find a film by title',function () {
    const actual = cinema.getFilmByTitle('T2 Trainspotting');
    const expected = trainspotting;
    assert.strictEqual(actual,expected);
  });

  it('should be able to filter films by genre', function () {
    const expected = [moonlight, trainspotting];
    const actual = cinema.getFilmsByGenre('drama');
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are some films from a particular year', function () {
    const expected = true;
    const actual = cinema.hasFilmsForYear(2017);
    assert.strictEqual(actual, expected);
  });

  it('should be able to check whether there are no films from a particular year', function () {
    const actual = cinema.hasFilmsForYear(2012);
    assert.strictEqual(actual, false);
  });

  it('should be able to check whether all films are over a particular length', function () {
    let actual = cinema.allFilmsLongerThan(90);
    let expected = true;
    assert.strictEqual(actual,expected);
  });

  it('should be able to check whether not all films are over a particular length', function () {
    let actual = cinema.allFilmsLongerThan(990);
    let expected = false;
    assert.strictEqual(actual,expected);
  });


  it('should be able to calculate total running time of all films', function () {
    const actual = cinema.getTotalRunningTime();
    const expected = 622
    assert.strictEqual(actual, expected);
  });

  it('should allow allow filtering on arbitrary property', function () {
    const actual = cinema.findAllMatching("title","T2 Trainspotting");
    const expected = [trainspotting];
    assert.deepEqual(actual,expected);
  })

});
