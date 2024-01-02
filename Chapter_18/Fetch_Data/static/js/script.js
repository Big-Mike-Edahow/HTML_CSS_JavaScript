// script.js

fetch("http://localhost/Fetch_Data/static/data/weekdays.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return list(data);
    })
    .catch(function (err) {
        return console.log(err);
    });

function list(data) {
    const values = Object.values(data);
    let i = 0;
    while (i < values.length) {
        console.log(values[i]);
        i++;
    }
}

