// script.js

(function () {
    let car = {
        make: "Jeep",
        model: "Wrangler",
        accelerate: function () {
            return this.model + " drives away";
        },
        brake: function () {
            return this.make + " pulls up";
        },
    };

    console.log("Car is a " + car.make + " " + car.model);
    console.log(car.accelerate());
    console.log(car.brake());

    let pickup = {
        make: "Ford",
        model: "F-150 XLT",
        accelerate: function () {
            return this.model + " Vrooom!";
        },
        brake: function () {
            return this.make + " Purrs...";
        }
    }

    console.log("\nPickup is a " + pickup.make + " " + pickup.model);
    console.log(pickup.accelerate());
    console.log(pickup.brake());

})();

