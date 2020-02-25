function doSomething(callback) {
    console.log('i did something');
    callback();
}

doSomething(() => {
    console.log('i did something after!');
});

//refactored
function doSomethingPromisefy() {
    return new Promise((resolve, reject) => {
        resolve(console.log('i did something'));
    });
}

(async () => {
    await doSomethingPromisefy();
    console.log('i did something after!')
})();