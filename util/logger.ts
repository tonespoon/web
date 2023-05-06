import pino from "pino";
import { createContext, useContext } from "react";

/**
 * logger is for use in the server.
 */
export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  serializers: {
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

const LoggerContext = createContext(logger);
/**
 * useLogger should be used in React Components.
 * @returns logger for use in the client.
 */
export const useLogger = () => useContext(LoggerContext);
