module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}"],
  modulePaths: ["<rootDir>/"],
  testRegex: [".*\\.test\\.(js|jsx|ts|tsx)$"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules",
    ".+\\.(png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
};
