const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (times) => {
  for (const time of times) {
    let date = new Date(time.risetime)
    console.log(`Next pass at ${date} for ${time.duration} seconds.`)
  }
}

nextISSTimesForMyLocation()
  .then((times) => {
    printPassTimes(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
