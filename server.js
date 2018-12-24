'use strict';
require('module-alias/register');
const Glue = require('glue');
const manifest = require('@configs/manifest');


if (!process.env.PRODUCTION) {
  manifest.register.plugins.push({
    "plugin":  "blipp",
    "options": {}

  });
}
const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, { relativeTo: __dirname });

        await server.start();
        console.log(`✅ Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();