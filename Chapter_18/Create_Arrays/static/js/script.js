// script.js

(function () {
    let jsArray = new Array(10);
    console.log(jsArray[0]);
    console.log(jsArray);

    let month,
        summer = ["June", "July", "August"];

    for (month in summer) {
        if (month !== " ") {
            console.log(month + ": " + summer[month]);
        }
    }

    console.log("Start of Summer: " + summer[0]);
    console.log(summer);
})();

