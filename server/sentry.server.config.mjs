import dotenv from "dotenv";
import * as Sentry from "@sentry/nuxt";
dotenv.config();
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  // replaysOnErrorSampleRate: 1.0,
});
