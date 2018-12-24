const manifest = {
    server: {
        host: 'localhost',
        port: 4000,

    },
    register: {
        plugins: [
            {
              plugin: './routes/api.js',
              routes: { prefix: '/api/v1' } 
            },
            {
              plugin: './routes/admin-api.js',
              routes: { prefix: '/admin/api/v1' } 
            },
            {
              plugin: require('good'),
              options: {
                ops: { interval: 60000 },
                reporters: {
                  console: [
                    { module: 'good-squeeze', name: 'Squeeze', args: [{ error: '*' }] }, { module: 'good-console' }, 'stdout'
                  ]
                }
              }
            }

        ]
        
    }
};

module.exports = manifest;