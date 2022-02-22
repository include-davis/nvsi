const NUMEVENTS = 2;

class StrapiClient {
    constructor() {}

    async fetchData(path) {
        const events = await strapi.api.event.services.event.find({});
        let eventsList = events.results;
        this.sortEventsByTime(eventsList);

        const numDelete = eventsList.length - NUMEVENTS;
        var deletable;
        if (numDelete >= 0) {
            deletable = eventsList.filter((event) => this.filter_func(event));
        } else {
            deletable = [];
        }

        //this.delete_exess(deletable, numDelete);  
        console.log("BEFORE INFLATE")
        console.log(eventsList)
        setTimeout(() => this.inflate_ids(eventsList).then(() => {
            setTimeout(() => this.reassign_ids(eventsList).then(() => {
                console.log("AFTER REORDER")
                console.log(eventsList)
            }), 5000);
            console.log("AFTER INFLATE")
            console.log(eventsList)
        }), 0);

       // this.reassign_ids(eventsList);
        //console.log(eventsList)

        //console.log(deletable);
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

async inflate_ids(eventsList) {
    await Promise.all(eventsList.map(eventObj => {
        return strapi.api.event.services.event.update(
            eventObj.id,
            {
                data: {
                    id: eventObj.id + 500
                }
            }
        );
    }));
}

async reassign_ids(eventsList) {
    let i = -1;
    await Promise.all(eventsList.map(eventObj => {
        i++;
        console.log(eventObj.id);
        return strapi.api.event.services.event.update(
            eventObj.id,
            {
                data: {
                    id: i + 1
                }
            }
        );
    }));
}

    delete_exess(deleteList, numDelete) {
        for (let i = 0; i < numDelete; i++) {
            strapi.api.event.services.event.delete(deleteList[i].id);
        } 
    }
}

module.exports = {StrapiClient};


/*
        await strapi.api.event.services.event.update(
            eventsList[0].id,
            {
                data: {
                    id: 3
                }
            }
        );
        await strapi.api.event.services.event.update(
            eventsList[3].id,
            {
                data: {
                    id: 5
                }
            }
        );
        await strapi.api.event.services.event.update(
            eventsList[4].id,
            {
                data: {
                    id: 1
                }
            }
        );

        await strapi.api.event.services.event.update(
            eventsList[1].id,
            {
                data: {
                    id: 4
                }
            }
        );

        await strapi.api.event.services.event.update(
            eventsList[2].id,
            {
                data: {
                    id: 2
                }
            }
        );

*/