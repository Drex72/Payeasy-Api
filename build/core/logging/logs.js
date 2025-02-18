"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDevLogger = exports.prodDevLogger = void 0;
const winston_1 = require("winston");
const { combine, printf, timestamp, colorize } = winston_1.format;
function logFormat() {
    return printf((info) => {
        return `${info.timestamp} ${info.level}: ${info.stack || info.message}`;
    });
}
function prodDevLogger() {
    return (0, winston_1.createLogger)({
        format: combine(colorize(), timestamp(), logFormat()),
        transports: [
            new winston_1.transports.File({
                level: 'info',
                filename: 'src/appLogs/greenhurb-info.log',
            }),
            new winston_1.transports.File({
                level: 'error',
                filename: 'src/appLogs/greenhurb-error.log',
            }),
        ],
    });
}
exports.prodDevLogger = prodDevLogger;
function buildDevLogger() {
    return (0, winston_1.createLogger)({
        format: combine(colorize(), timestamp(), logFormat()),
        transports: [new winston_1.transports.Console()],
    });
}
exports.buildDevLogger = buildDevLogger;
