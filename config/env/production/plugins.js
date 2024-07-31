const AWS = require('aws-sdk');
const { env } = require('@strapi/utils');
require('dotenv').config();

const spacesEndpoint = new AWS.Endpoint(env('DO_SPACE_ENDPOINT'));

/**
 * Configurations for upload functionality
 * @returns {Object} Upload configuration object
 */
module.exports = () => ({
    upload: {
        config: {
            provider: '@strapi/provider-upload-aws-s3', // AWS S3 provider
            providerOptions: {
                accessKeyId: env('DO_SPACE_ACCESS_KEY'), // Access key ID
                secretAccessKey: env('DO_SPACE_SECRET_KEY'), // Secret access key
                region: 'us-east-1', // AWS region
                params: {
                    Bucket: env('DO_SPACE_BUCKET'), // Bucket name
                },
                endpoint: spacesEndpoint.href, // Endpoint URL
                s3Options: {
                    s3ForcePathStyle: true, // Force path style URLs
                    signatureVersion: 'v4', // Signature version
                },
            },
            actionOptions: {
                upload: {}, // Upload action options
                uploadStream: {}, // Upload stream options
                delete: {}, // Delete action options
            },
        },
    },
    i18n: {
        config: {
            defaultLocale: 'en', // Default locale
            locales: ['en', 'fr', 'es', 'de', 'ru', 'zh-Hans', 'zh'], // Supported locales
        },
    },
    slugify: {
        enabled: true, // Slugify enabled
    },
});

