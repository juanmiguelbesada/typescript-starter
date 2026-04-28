/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["tests/*.spec.ts"],
		typecheck: {
			tsconfig: "./tsconfig.test.json",
		},
	},
});
