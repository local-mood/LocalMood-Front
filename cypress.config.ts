import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "7tj4he",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
  viewportWidth: 400,
  viewportHeight: 780,
});
