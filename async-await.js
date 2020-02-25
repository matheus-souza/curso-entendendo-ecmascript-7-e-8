const fetch = require("node-fetch");

async function showGitHubUserInfo(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
    } catch (err) {
        console.log('deu erro', err);
    }
}

showGitHubUserInfo('matheus-souza');