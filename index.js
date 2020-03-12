/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (times) => {
  for (const time of times) {
    let date = new Date(time.risetime)

    console.log(`Next pass at ${date} for ${time.duration} seoncds.`)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
