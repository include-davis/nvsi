const clientClass = require("../lib/strapi_client");

const client = new clientClass.StrapiClient();

getEvents = async () => {
    const allEvents = await client.fetchData('/events');
    return allEvents;
}

module.exports = {getEvents};


