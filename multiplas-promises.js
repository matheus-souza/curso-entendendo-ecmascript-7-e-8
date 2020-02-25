const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function showGitHubUserAndRepos(username) {
    /*const userPromise = fetchFromGitHub(`/users/${username}`);
    const reposPromise = fetchFromGitHub(`/users/${username}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;*/

    //refactory
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${username}`),
        fetchFromGitHub(`/users/${username}/repos`)
    ]);

    console.log(user.name);
    console.log(repos.length);
}

showGitHubUserAndRepos('matheus-souza');