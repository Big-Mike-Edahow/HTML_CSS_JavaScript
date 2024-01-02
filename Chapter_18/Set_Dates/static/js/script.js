// script.js

(function () {
    const holiday = new Date(2025, 6, 4);
    console.log("Object: " + holiday);

    holiday.setFullYear(2028);
    holiday.setMonth(11);
    holiday.setDate(25);
    holiday.setHours(12);
    holiday.setMinutes(0);
    holiday.setSeconds(0);
    holiday.setMilliseconds(0);

    console.log("String: " + holiday.toString());
    console.log("UTC: " + holiday.toUTCString());
    console.log("Locale: " + holiday.toLocaleString());
    console.log("Date: " + holiday.toDateString());
    console.log("Time: " + holiday.toTimeString());
})();

