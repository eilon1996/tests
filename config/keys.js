if(process.env.NODE_ENV !== 'production')
    module.exports = require('./key_prods');

else
    module.exports = require('./key_dev');