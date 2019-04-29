module.exports = {
  generateRandomID,
  generateRandomMovies
};

const faker = require('faker');

function randomNum(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function generateRandomID(userContext, events, done) {
  const id = randomNum(1,9999999);
  userContext.vars.id = id;
  return done();
}



function generateRandomMovies( userContext, evnets, done){
  var genre = ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi"]
  var rating = ['G','PG','PG-13','R']

    const name = faker.lorem.words(3)
    const movieGenre = genre[randomNum(1,genre.length-1)]
    const score = randomNum(1,10)
    const runtime = randomNum(100,150)
    const image = faker.image.avatar()
    const movieRating = rating[randomNum(0, 3)]
    const releaseMonth = faker.date.month()
    const releaseDay = randomNum(1,30)
    const releaseYear = randomNum(1980,2018)

    userContext.vars.name = name
    userContext.vars.genre = movieGenre
    userContext.vars.score = score
    userContext.vars.runtime = runtime
    userContext.vars.image = image
    userContext.vars.rating = movieRating
    userContext.vars.releaseMonth = releaseMonth
    userContext.vars.releaseDay = releaseDay
    userContext.vars.releaseYear = releaseYear
    return done();
}
