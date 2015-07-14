function yrs() {
    var start = new Date("July 27, 2015 10:00:00"),
        now   = new Date();

    if(start.getTime() < now.getTime()) {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
        };
    }

    return {
        seconds: (start.getTime() - now.getTime()) / 1000,
        minutes: (start.getTime() - now.getTime()) / 1000 / 60,
        hours: (start.getTime() - now.getTime()) / 1000 / 60 / 60,
        days: (start.getTime() - now.getTime()) / 1000 / 60 / 60 / 24
    };
}

module.exports = yrs;
