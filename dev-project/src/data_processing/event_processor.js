const clientClass = require("./strapi_client");

const client = new clientClass.StrapiClient();

processEvents = async () => {
    const allEvents = await client.processEventData();
    return allEvents;
}

module.exports = {processEvents};


