module.exports = [{
    register: require('good'),
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  }, {
    register: require('inert'),
  },
  {
    register: require('h2o2')
  }
];
