const redis = require('redis');
/*
const client = redis.createClient();
client.on('connect', function() {
  console.log('Connected!');
});

*/
const client = redis.createClient({
  url: "redis://64.227.186.214:6379"
});


client.set('framework', 'ReactJS', function(err, reply) {
  console.log(reply); // OK
});


client.get('framework', function(err, reply) {
  console.log(reply); // ReactJS
});


console.log("redis demo completed");
