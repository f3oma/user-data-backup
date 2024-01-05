module.exports = {
    root: true,
    env: {
      es6: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:@typescript-eslint/recommended",
    ],
    overrides: [
      {
        files: ["*.ts", "*.tsx"], // Your TypeScript files extension
        parserOptions: {
          project: ["./tsconfig.json"], // Specify it only for TypeScript files
        },
      },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: ["tsconfig.dev.json"],
      tsconfigRootDir: __dirname,
      sourceType: "module",
    },
    ignorePatterns: [
      "/lib/**/*", // Ignore built files.
    ],
    plugins: [
      "@typescript-eslint",
      "import",
    ],
    rules: {
      "import/no-unresolved": 0,
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-unused-vars": ["off"]
    },
  };
  