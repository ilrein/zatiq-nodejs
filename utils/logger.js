/* eslint-disable */
const chalk = require('chalk');
const morgan = require('morgan');

const BoxLog = (msg) => {
  console.log(chalk.yellow(' ------------------------------------------'));
  console.log(
    chalk.yellow('|'),
    chalk.blue(msg),
    chalk.yellow('|'),
  );
  console.log(chalk.yellow(' ------------------------------------------'));
};

const ItalicLog = (base, core) => {
  console.log(
    chalk.cyan(base),
    chalk.green(chalk.italic(core)),
  );
};

const Info = (msg) => {
  console.log(
    chalk.blue(msg),
  );
};

const Issue = (msg) => {
  console.log(
    chalk.red(msg),
  );
};

const requestLogger = morgan((tokens, req, res) => {
  return chalk.green(tokens.method(req, res))
    + ' ' + chalk.blue(tokens.url(req, res))
    + ' ' + chalk.magenta(tokens['response-time'](req, res), 'ms')
});

module.exports = {
  BoxLog,
  requestLogger,
  ItalicLog,
  Info,
  Issue,
};
