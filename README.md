# SQLite Transport for Winston

The winston-sqlite module allows you to log your [winston](https://github.com/flatiron/winston) messages to an SQLite database.

## Installation (Coming soon...ish.)

    $ npm install winston-sqlite

## Usage
```js
var winston = require('winston');
// Requiring `winston-sqlire` will expose `winston.transports.SQLite`
require('winston-sqlite');

Winston.add(winston.transports.SQLite, options);
```

## API

winston-sqlite uses [Sequelize](https://github.com/sequelize/sequelize) to stuff things into SQLite.

## License

(The MIT License)

Copyright (c) 2013 Jonathan Lomas &lt;jonathan@floatinglomas.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
