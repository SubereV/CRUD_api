const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.uri;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
