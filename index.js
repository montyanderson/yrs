function yrs() {
    var start = new Date("July 27, 2015 10:00:00"),
        now   = new Date();

    return {
        seconds: (start.getTime() - now.getTime()) / 1000,
        minutes: (start.getTime() - now.getTime()) / 1000 / 60,
        hours: (start.getTime() - now.getTime()) / 1000 / 60 / 60,
        days: (start.getTime() - now.getTime()) / 1000 / 60 / 60 / 24
    };
}

module.exports = yrs;
