const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/b1f0f983855a97497364ba1835909a56/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
