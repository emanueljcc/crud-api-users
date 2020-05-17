require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== "PRODUCTION",
    port: process.env.PORT || 4002,
}

module.exports = config;