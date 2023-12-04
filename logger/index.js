const winston = require('winston');

const logger =  winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log'}),
    ]  

});

// si estamos en una variable de entorno y no es de produccion 
if (process.env.NODE_ENV !== 'production') {
    // agregamos el logger a la consola
    logger.add(new winston.transports.Console({
        // formato simple
        format: winston.format.simple(),
    }));
}

module.exports = logger;