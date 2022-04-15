const qs = require('qs');

// link to the API hosted by Heroku
const API = "https://nvsi-strapi-backend.herokuapp.com/api"

// const CURRENT_DAY = new Date().toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
const CURRENT_DAY = new Date();

/**
 * Calls for all past events. 
 * @returns {Promise<Array.<JSON>>} events
 */
export async function getPastEvents() {
  // const query = ""
  const query = qs.stringify({
    sort: ['Date:desc', 'StartTime:desc'],
    filters: {
      Date: {
        $lt: CURRENT_DAY
      }
    },
    populate: '*',
  }, {
    encodeValuesOnly: true
  });

  const events = await fetch(`${API}/events?${query}`);
  const json = await events.json();
  return json.data;
  // return events;
}

/**
 * Returns all upcoming events.
 * @returns {Promise<Array.<JSON>>} events
 */
export async function getUpcomingEvents() {
  const query = qs.stringify({
    sort: ['Date:desc', 'StartTime:desc'],
    pagination: {
      limit: 3
    },
    filters: {
      Date: {
        $gt: CURRENT_DAY
      }
    },
    populate: '*',
  }, {
    encodeValuesOnly: true
  });
  const events = await fetch(`${API}/events?${query}`);
  const json = await events.json();
  return json.data;
}

/**
 * @param {<Array.<JSON>>} pastEvents 
 * @param {<Array.<JSON>>} currentEvents
 * @returns {<Array.<JSON>>} events 
 */
export function combineEvents(pastEvents, currentEvents) {
  //console.log(Array.isArray(pastEvents));
  //console.log(Array.isArray(currentEvents));
  const allEvents = Array.from(pastEvents).concat(currentEvents);
  return allEvents;
}

/**
 * 
 * @param {<Array.<JSON>>} events 
 * @param {String} tag
 * @returns {JSON} event 
 */
export function getEvent(events, tag) {
  const event = events.filter(x => x.attributes.tag.includes(tag));
  console.log("Returning event:", event[0])
  return event[0];
}

/**
 * 
 * @param {String} section 
 * @returns function to put into filter
 */
export function getCommunityFunction(section) {
  return async () => {
    const query = qs.stringify({
      filters: {
        Title: {
          $eq: section
        }
      },
    }, {
      encodeValuesOnly: true
    }

    );
    const events = await fetch(`${API}/members/${query}`);
    return events
  }
}

/**
 * Getting all white papers currently stored in Strapi.
 * @returns {Promise<Array.<JSON>>} white papers
 */

export async function getWhitePapers() {
  console.log("Getting whitepapers");
  const events = await fetch(`${API}/whitepapers?populate=*`);
  const json = await events.json();
  // console.log("PDF:", json.data[0].attributes.PDF.data.attributes.url);
  return json.data;
}

/**
 * Query a specific paper from a list of whitepapers by querying its ID.
 * @param {Array.<JSON>} papers
 * @param {Number} id
 * @returns {JSON} paper
 */
export function getWhitePaper(papers, id) {
  const paper = papers.filter(x => x.id == id);
  console.log("Returning paper:", paper[0])
  return paper[0];
}

/**
 * Returns a link to a specific white paper using by querying its ID.
 * @param {Array.<JSON>} papers 
 * @param {Number} id 
 * @returns {String} URL
 */
export function getWhitePaperLink(papers, id) {
  console.log("Getting link for white paper with ID:", id);
  const paper = getWhitePaper(papers, id);
  const url = paper.attributes.PDF.data.attributes.url;
  console.log("URL FOUND:", url)
  return url;
}

/**
 * Returns a link to a specific event using by querying its tag.
 * @param {Array.<JSON>} event
 * @param {Number} tag 
 * @returns {String} URL
 */
export function getEventLink(events, tag) {
  let url = ""
  console.log("Getting link for event with tag:", tag);
  const event = getEvent(events, tag);
  if (event.attributes.Image.hasOwnProperty('data')) {
    if (event.attributes.Image.data != null) {
      let url = event.attributes.Image.data.attributes.url;
      console.log("URL FOUND:", url)
    }
  }
  return url;
}