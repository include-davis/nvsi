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
  }, {
    encodeValuesOnly: true
  });

  const events = await fetch(`${API}/events?${query}`);
  return events;
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
  }, {
    encodeValuesOnly: true
  });
  const events = await fetch(`${API}/events?${query}`);
  const json = await events.json();
  return json.data;
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

