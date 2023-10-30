const { createLogger, transports, format } = require('winston');

// Create a logger instance with custom transports and formatting.
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.simple()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
