module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7773ba9e76a6821b7470fdec96cb7a77'),
  },
});
