module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a685432f979440d6d46396fd5051924c'),
  },
});
