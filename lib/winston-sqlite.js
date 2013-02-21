/**
 * Module dependencies.
 */

var util = require('util'),
    winston = require('winston'),
    Sequelize = require('sequelize');

/**
 * Expose `SQLite`
 */

module.exports = SQLite;

/**
 * Expose the name of this Transport on the prototype
 */
SQLite.prototype.name = 'sqlite';

/**
 * Initialize a `SQLite` transport object with the given `options`.
 *
 * Events:
 *
 *  - `error` an error occurred
 *  - `stream` file streaming has started
 *  - `end` streaming has completed
 *  - `directory` a directory was requested
 *
 * @param {Request} req
 * @param {String} path
 * @param {Object} options
 * @api private
 */

function SQLite(options) {
    options = options || {};

    winston.Transport.call(this, options);

    this.name = 'sqlite';
    this.db = options.db || options.database || 'winston';
    this.username = options.username || 'winston';
    this.password = options.password || null;
    this.storage = options.storage || ':memory:';
};

/**
 * Inherits from `winston.Transport`.
 */
util.inherits(SQLite, winston.Transport);

/**
 * Define a getter so that `winston.transports.SQLite`
 * is available and thus backwards compatible.
 */
winston.transports.SQLite = SQLite;

/**
 * Core Winston logging method.
 *
 * @param {String} level to log at
 * @param {String} message to log
 * @param {object} metadata to attach to the messages
 * @param {Function} callback to respond to when complete
 * @api public
 */
SQLite.prototype.log = function (level, msg, meta, callback) {
    if (this.silent) {
        return callback && callback(null, true);
    };

    var self = this;

    var params = {};

    params.timestamp = new Date;
    params.message = msg;
    params.level = level;
    params.meta = meta || {};

    this.client.create(params).done(function (err, result) {
        if (err) {
            self.emit('error', err);
            if (callback && typeof callback === 'function') callback(err, false);
            return;
        };

        self.emit('logged');
        if (callback && typeof callback === 'function') callback(err, false);
    });
};

/**
 *
 */

SQLite.prototype._ensureClient = function () {
    if (this._client) return this._client;

    var sequelize = new Sequelize(this.db, this.username, this.password, {
        dialect: 'sqlite',
        storage: this.storage
    });

    var Entry = sequelize.define('Entry', {
        timestamp: Sequelize.DATE,
        level: Sequelize.STRING,
        message: Sequelize.STRING,
        meta: Sequelize.STRING
    }, {
        timestamps: false
    });

    this._client = Entry;

    return this._client;
};

SQLite.prototype.__defineGetter__('client', function () {
    return this._ensureClient();
});

/**
 *
 */

/**
 * Winston transport query method.
 *
 * @param {Object} query options
 * @param {Function} callback to respond to when complete
 * @api public
 */
SQLite.prototype.query = function (options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    };

    var self = this,
    query = {};
};

/**
 * Winston transport stream method; uses polling.
 *
 * @param {Object} query options
 * @param {Object} pre-existing stream
 * @return {Object} stream
 * @api public
 */
SQLite.prototype.stream = function (options, stream) {
    return stream;
};
