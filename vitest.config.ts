import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 10000,
    reporters: "basic",
    globals: true,
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["json-summary", "text", "html", "lcov"],
      include: ["src/**"],
    },
  },
});
