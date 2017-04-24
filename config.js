var _ = require('lodash');
var generalConfig = {
    slack: 'https://hooks.slack.com/services/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'
}

var development = {
    development: true,
    port: 3000,
    host: 'http://localhost:3000'
};


var production = {
    development: false,
    port: 3000,
    host: 'http://munin-dot-'+global.process.env.GCLOUD_PROJECT+'.appspot.com'
};


if (global.process.env.NODE_ENV === 'production' ||
    global.process.env.NODE_ENV === 'staging') {
    console.log('setting env to ' + global.process.env.NODE_ENV);
    _.merge(generalConfig, production);

} else {
    console.log('setting env to development');
    _.merge(generalConfig, development);
}
exports.Config = generalConfig;