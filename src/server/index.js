const express = require('express');
const os = require('os');

const app = express();

const PORT = 8080;

app.use(express.static('dist'));

app.get('/api/is-alive', (req, res) => res.send('I am live'));

app.get('/api/get-username', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
