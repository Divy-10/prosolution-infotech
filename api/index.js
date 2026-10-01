const contactHandler = require('./contact');

module.exports = async function handler(req, res) {
    if (req.url.includes('/contact') || req.url === '/' || req.url === '/api') {
        return contactHandler(req, res);
    }
    return contactHandler(req, res);
};
