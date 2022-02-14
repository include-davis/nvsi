module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8bc01f303e3caf558d977ebde81118b0'),
  },
});
