module.exports = ({ env })=>({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env(),
                secretAccessKey: env(),
                region: env(),
                params: {
                    Bucket: env(),
                },
            },
        },
    },
});