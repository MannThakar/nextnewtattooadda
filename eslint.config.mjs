import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const eslintConfig = [
  {
    languageOptions: {
      parser: "@typescript-eslint/parser", // Define the parser manually
      sourceType: "module",
    },
  },
  ...compat.extends("next/core-web-vitals"), // Use FlatCompat only for extends
];

export default eslintConfig;
