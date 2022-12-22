const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=77f2eb7350a301f6d4913e074a82f9fd&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature is ' + body.current.temperature + ' and it feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast