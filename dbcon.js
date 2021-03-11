var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_lumsdejo',
  password        : '6633',
  database        : 'cs290_lumsdejo'
});

module.exports.pool = pool;