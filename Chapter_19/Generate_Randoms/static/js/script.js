// script.js

(function () {
    let rand;
    let temp;
    let nums = [];
    let str = "\n\nYour Six Lucky Numbers: ";

    for (let i = 1; i < 60; i++) {
        nums[i] = i;
    }

    for (let i = 1; i < 60; i++) {
        rand = Math.ceil(Math.random() * 59);
        temp = nums[i];
        nums[i] = nums[rand];
        nums[rand] = temp;
    }

    for (let i = 1; i < 7; i++) {
        str += nums[i];
        if (i !== 6) {
            str += " - ";
        }
    }

    console.log(str);
})();

