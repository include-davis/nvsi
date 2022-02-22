const NUMEVENTS = 2; // number of events displayed on the website
const EVENTBUFFER = 10000; // maximum number of events allowed to be created before needing to reset

class StrapiClient {
    constructor() {}

    async processEventData() {
        // find all event instances
        const events = await strapi.api.event.services.event.find({});
        let eventsList = events.results;

        // sort by time
        this.sortEventsByTime(eventsList);

        // calculate how many events can be deleted at most taking in account you want events
        // on the website at all times
        const numDelete = eventsList.length - NUMEVENTS;

        // creating an array of events that have already passed the EndTIme
        var deletable;
        if (numDelete >= 0) {
            deletable = eventsList.filter((event) => this.filter_func(event));
        } else {
            deletable = [];
        }

        // calculating how many events are going to be deleted
        const deleted = Math.min(deletable.length, numDelete);

        // deleting the events
        this.delete_exess(deletable, numDelete);
        eventsList = eventsList.slice(deleted);
        
        // moving the range of ids to var(EVENTBUFFER) away
        this.inflate_ids(eventsList).then(() => {
            // reassigning the ids to 1 - (number of events)
            this.reassign_ids(eventsList).then(() => {
                console.log(eventsList);
            })       
        })
        return;
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
            if (currTime > (this.timeToNumber(event.EndTime))) {
                return true;
            }
        }
    }

async inflate_ids(eventsList) {
    await Promise.all(eventsList.map(eventObj => {
        const output = strapi.api.event.services.event.update(
            eventObj.id,
            {
                data: {
                    id: eventObj.id + EVENTBUFFER
                }
            }
        );
        eventObj.id += EVENTBUFFER;
        return output;
    }));
}

async reassign_ids(eventsList) {
    let i = -1;
    await Promise.all(eventsList.map(eventObj => {
        i++;
        const output = strapi.api.event.services.event.update(
            eventObj.id,
            {
                data: {
                    id: i + 1
                }
            }
        );
        eventObj.id = (i + 1);
        return output;
    }));
}

    delete_exess(deleteList, numDelete) {
        if (deleteList.length == 0) {
            return;
        }
        for (let i = 0; i < numDelete; i++) {
            strapi.api.event.services.event.delete(deleteList[i].id);
        } 
    }
}

module.exports = {StrapiClient};