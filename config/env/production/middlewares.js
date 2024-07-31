/**
 * The middleware configuration for production environment.
 *
 * @param {Object} env - The environment variables.
 * @return {Array} The middleware configuration.
 */
module.exports = ({ env }) => [
  'strapi::logger', // Logger middleware
  'strapi::errors', // Error middleware
  {
    name: 'strapi::security', // Security middleware
    /**
     * The configuration for the security middleware.
     *
     * @type {Object}
     */
    config: {
      // Content Security Policy (CSP) configuration
      contentSecurityPolicy: {
        useDefaults: true, // Use default policies
        directives: {
          // Default source policy
          'default-src': ["'self'", '*'],
          // Image source policy
          'img-src': ["'self'", '*', 'data:', 'blob:', env('DO_SPACE_CDN')],
          // Media source policy
          'media-src': ["'self'", '*', 'data:', 'blob:', env('DO_SPACE_CDN')],
          // Script source policy
          'script-src': ["'self'", '*', "'unsafe-inline'", "'unsafe-eval'"],
          // Style source policy
          'style-src': ["'self'", '*', "'unsafe-inline'"],
          // Connect source policy
          'connect-src': ["'self'", '*'],
          // Font source policy
          'font-src': ["'self'", '*', 'data:'],
        },
      },
      // XSS Protection configuration
      xssProtection: true,
      // Frame Guard configuration
      frameguard: true,
      // HTTP Strict Transport Security (HSTS) configuration
      hsts: true,
      // Permitted Cross Domain Policies configuration
      permittedCrossDomainPolicies: true,
      // Referrer Policy configuration
      referrerPolicy: true,
      // No Sniff configuration
      noSniff: true,
    },
  },
  'strapi::cors', // Cross-Origin Resource Sharing (CORS) middleware
  'strapi::poweredBy', // Powered-By middleware
  'strapi::query', // Query parser middleware
  'strapi::body', // Body parser middleware
  'strapi::session', // Session middleware
  'strapi::favicon', // Favicon middleware
  'strapi::public', // Public assets middleware
];
  