module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    //keys: env.array('APP_KEYS'),
    keys:("APP_KEYS", ["testKey1", "testKey2"]),
  },
  // cron: {
  //   enabled: true,
  //   tasks: {
  //       // Updates database every 10 seconds
  //       '*/10 * * * * *': async() => {
  //       require('../src/data_processing/event_processor').processEvents()
  //     }
  //   }
  // }
});
