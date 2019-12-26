const express = require('express');
const redis = require('redis');

// initialize the express
const app = express();

// create client that will listen to the redis server
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

// set the default value
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
})