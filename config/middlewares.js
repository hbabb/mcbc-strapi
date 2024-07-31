module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", '*'],
          'img-src': ["'self'", '*', 'data:', 'blob:', env('DO_SPACE_CDN').replace(/^https?:\/\//, '')],
          'media-src': ["'self'", '*', 'data:', 'blob:', env('DO_SPACE_CDN').replace(/^https?:\/\//, '')],
          'script-src': ["'self'", '*', "'unsafe-inline'", "'unsafe-eval'"],
          'style-src': ["'self'", '*', "'unsafe-inline'"],
          'connect-src': ["'self'", '*'],
          'font-src': ["'self'", '*', 'data:'],
        },
      },
      xssProtection: true,
      frameguard: true,
      hsts: true,
      permittedCrossDomainPolicies: true,
      referrerPolicy: true,
      noSniff: true,
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
