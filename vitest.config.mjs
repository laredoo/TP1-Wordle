import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.?(js|)?(x)"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/vitestSetup.ts"],
    maxWorkers: 1,
    maxConcurrency: 10,
    poolOptions: {
      threads: {
        maxThreads: 10,
        minThreads: 1,
      },
    },
    server: {
      deps: {
        inline: ["react-dnd"],
      },
    },
  },
});
