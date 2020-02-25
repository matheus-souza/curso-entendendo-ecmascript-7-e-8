const fetch = require("node-fetch");

fetch('https://api.github.com/users/matheus-souza')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log('deu erro', err));