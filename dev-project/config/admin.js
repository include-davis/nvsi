module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '720226a858810301dcd497e4675a0ee9'),
  },
});
