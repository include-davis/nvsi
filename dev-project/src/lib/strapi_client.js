const NUMEVENTS = 2;

class StrapiClient {
    constructor() {}

    async fetchData(path) {
        const events = await strapi.api.event.services.event.find({});
        let eventsList = events.results;
        this.sortEventsByTime(eventsList);

        const couldDelete = eventsList.length - NUMEVENTS;
        if (couldDelete >= 0) {
            var deletable = eventsList.filter((event) => this.filter_func(event));
        }

        //this.reorder_ids(events, eventsList);

        await strapi.api.event.services.event.update(
            {
                id: 5
            },
            {

            }
        )
        console.log();

        //this.delete_exess(deletable, couldDelete);

        console.log(deletable);

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
            let output = 0;
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

    filter_func(event) {
        let currDateObj = new Date();
        let currDate = currDateObj.getFullYear() * 10000 + (currDateObj.getMonth() + 1) * 100 + currDateObj.getDate();
        let currTime = currDateObj.getHours()  * 10000000 
                        + currDateObj.getMinutes() * 100000
                        + currDateObj.getSeconds() * 1000
                        + currDateObj.getMilliseconds();
        if (currDate > (this.dateToNumber(event.Date))) {
            return true;
        } else if (currDate == (this.dateToNumber(event.Date))){
            if (currTime > (this.timeToNumber(event.StartTime))) {
                return true;
            }
        }
    }

    async reorder_ids(events, eventList) {
        for (let i = 0; i < eventList.length; i++) {
            console.log(eventList[i].id)
            await Promise.all(events.map(event => {
                return strapi.api.event.services.event.update(
                    {
                        id: eventList[i].id
                    }, 
                    { 
                        id: i
                    }
                );
              }));
        }
    }

    delete_exess(deleteList, numDelete) {

        //strapi.api.event.services.event.delete(event.id);
    }
}

module.exports = {StrapiClient};

/*
                //Title: eventList[i].Title,
                //Description: eventList[i].Description,
                "Date": eventList[i].Date,
                "StartTime": eventList[i].StartTime,
                "EndTime": eventList[i].EndTime,
                "createdAt": eventList[i].createdAt,
                "updatedAt": eventList[i].updatedAt,
                "publishedAt": eventList[i].publishedAt

*/