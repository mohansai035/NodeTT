

const request = require('request');
const yargs=require('yargs');
const argv = yargs
.options({
  a: {
    demand : true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;
console.log(argv.address);
var encodedaddress = encodeURI(argv.address);
console.log(encodedaddress);
request({url: 'http://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}',
json:true},
(error, response, body) => {
  console.log(`address: ${body.results[0].formatted_address}`);
  console.log(`latitude: ${body.results[0].geometry.location.lat}
              longitute: ${body.results[0].geometry.location.lng}`);
});
