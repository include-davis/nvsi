const qs = require('qs');

// link to the API hosted by Heroku
const API = "https://nvsi-strapi-backend.herokuapp.com/api"

// const CURRENT_DAY = new Date().toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
const CURRENT_DAY = new Date();

/**
 * Calls for all past events. 
 * @returns JSON[]
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
 */

export async function getWhitePapers() {
  console.log("Getting whitepapers");
  const events = await fetch(`${API}/whitepapers?populate=*`);
  const json = await events.json();
  // console.log("PDF:", json.data[0].attributes.PDF.data.attributes.url);
  return json.data;
}

/**
 * Query a white paper from the current set of all white papers using relevant white paper id.
 */
export async function getWhitePaper(papers, id) {

}