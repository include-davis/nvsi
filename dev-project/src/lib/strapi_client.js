const NUMEVENTS = 2;

class StrapiClient {
    constructor() {}

    async fetchData(path) {
        const events = await strapi.api.event.services.event.find({});
        var eventsList = events.results;
        this.sortEventsByTime(eventsList);

        const couldDelete = eventsList.length - NUMEVENTS;
        if (couldDelete >= 0) {
            var deletable = eventsList.map((event) => {
                var currDateObj = new Date();
                var currDate = currDateObj.getFullYear * 10000 + currDateObj.getMonth * 100 + currDateObj.getDate
                var currTime = currDateObj.getHours * 10000000 
                                + currDateObj.getMinutes * 100000
                                + currDateObj.getSeconds * 1000
                                + currDateObj.getMilliseconds;
            });
        }

        console.log(eventsList);
        return events;
    }

    dateToNumber(date) {
        return parseInt(date.toString().replaceAll("-", ""));
    }

    timeToNumber(time) {
        return parseInt(time.toString().replaceAll(":", "").replaceAll(".", ""));
    }

    sortEventsByTime(eventsList) {
        eventsList.sort((event1, event2) => {
            var output = 0;
            const dateCompare = (this.dateToNumber(event1.Date) - this.dateToNumber(event2.Date));
            if (dateCompare > 0) {
                output = 1;
            } else if (dateCompare < 0) {
                output = -1;
            } else {
                const timeCompare = (this.timeToNumber(event1.StartTime) - this.timeToNumber(event2.StartTime));
                if (timeCompare > 0) {
                    output = 1;
                } else if (timeCompare < 0) {
                    output = -1;
                }
            }
            return output;
        });
    }
}

module.exports = {StrapiClient};