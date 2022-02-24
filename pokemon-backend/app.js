const Hapi = require('@hapi/hapi');
const Joi = require('joi');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.validator(Joi);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    
    server.route({
        method: 'GET',
        path: '/catch',
        handler: (request, h) => {
            const chance = Math.floor(Math.random() * 10) + 1;
            return chance % 2 == 0 ?  true : false;
        }
    });

    server.route({
        method: 'GET',
        path: '/release',
        handler: (request, h) => {
            const releaseNumber = Math.floor(Math.random() * 100) + 1;
            return releaseNumber;
        }
    });

    server.route({
        method: 'POST',
        path: '/rename',
        options: {
            validate: {
                payload: {
                    pokename: Joi.string().required(),
                    beforeLastRename: Joi.number().optional().default(0),
                    lastRename: Joi.number().optional().default(0)
                }
            }
        },
        handler: (request, h) => {
            const newNickname = `${request.payload.pokename}-${request.payload.beforeLastRename + request.payload.lastRename}`;
            return newNickname;
        }
    });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();