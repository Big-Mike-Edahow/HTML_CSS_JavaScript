// script.js

(function () {
    const promise = new Promise(function (resolve, reject) {
        let random = Math.round(Math.random() * 10);

        if (random % 2 === 0) {
            setTimeout(function () {
                resolve(random);
            }, 1000);
        } else {
            setTimeout(function () {
                reject(random);
            }, 1000);
        }
    });

    promise
        .then(console.log(promise))
        .then(function (res) {
            console.log(res + " Is Even");
        })
        .catch(function (err) {
            console.log(err + " Is Odd");
        });
})();

