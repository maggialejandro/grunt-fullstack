'use strict';

module.exports = {
  env: 'production',
  sequelize: {
    database: process.env.OPENSHIFT_GEAR_NAME,
    username : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
    password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
    port: process.env.OPENSHIFT_MYSQL_DB_PORT,
    host: process.env.OPENSHIFT_MYSQL_DB_HOST
  },
  ip: process.env.OPENSHIFT_NODEJS_IP ||
    process.env.IP ||
    '0.0.0.0',
  port: process.env.OPENSHIFT_NODEJS_PORT ||
    process.env.PORT ||
    8080
};
