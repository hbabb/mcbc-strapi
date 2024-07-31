const AWS = require('aws-sdk');
const { env } = require('@strapi/utils');
require('dotenv').config();

const spacesEndpoint = new AWS.Endpoint(env('DO_SPACE_ENDPOINT'));

module.exports = () => ({
    upload: {
        config: {
            provider: '@strapi/provider-upload-aws-s3',
            providerOptions: {
                accessKeyId: env('DO_SPACE_ACCESS_KEY'),
                secretAccessKey: env('DO_SPACE_SECRET_KEY'),
                region: 'us-east-1',
                params: {
                    Bucket: env('DO_SPACE_BUCKET'),
                },
                endpoint: spacesEndpoint.href,
                s3Options: {
                    s3ForcePathStyle: true,
                    signatureVersion: 'v4',
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    i18n: {
        config: {
            defaultLocale: 'en',
            locales: ['en', 'fr', 'es', 'de', 'ru', 'zh-Hans', 'zh'],
        },
    },
    slugify: {
        enabled: true,
    },
});


// Check if environment variables are loaded correctly
console.log('DO_SPACE_ACCESS_KEY:', env('DO_SPACE_ACCESS_KEY'));
console.log('DO_SPACE_SECRET_KEY:', env('DO_SPACE_SECRET_KEY'));
console.log('DO_SPACE_ENDPOINT:', env('DO_SPACE_ENDPOINT'));
console.log('DO_SPACE_BUCKET:', env('DO_SPACE_BUCKET'));
console.log('DO_SPACE_DIRECTORY:', env('DO_SPACE_DIRECTORY'));
console.log('DO_SPACE_CDN:', env('DO_SPACE_CDN'));
