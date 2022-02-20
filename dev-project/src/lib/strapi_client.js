request = require('request');

class StrapiClient {
    constructor() {}

    async fetchData(path) {
        const requestURL = `${process.env.STRAPI_API_URL}${path}`;
        const response = await request(requestURL);
        const data = await response.json();
        return data;
    }
}

module.exports = {StrapiClient};