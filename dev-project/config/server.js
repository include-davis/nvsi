module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  cron :{
    enabled: true,
    tasks: {
      '*/10 * * * * *': async() => {
        console.log(require('../src/data_processing/event_processor').getEvents())
      }
    }
  }
});
