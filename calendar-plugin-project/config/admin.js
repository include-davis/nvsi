module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ef2d51070802c9687a97a47ad45183e'),
  },
});
