/**
 * Calls for all past events. 
 * @returns JSON[]
 */

const API = "https://nvsi-strapi-backend.herokuapp.com/"

async function getPastEvents() {
  await fetch(`${API}/events`)
}