import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default config;
