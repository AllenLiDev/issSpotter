const request = require('request-promise-native');

const fetchMyIP = () => {
  return request(`https://api.ipify.org?format=json`);
};

const fetchCoordsByIP = (ip) => {
  let myIp = JSON.parse(ip);
  return request(`https://ipvigilante.com/json/${myIp.ip}`);
};

const fetchISSFlyOverTimes = (coords) => {
  let coordsParsed = JSON.parse(coords);
  let { longitude, latitude } = coordsParsed.data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
