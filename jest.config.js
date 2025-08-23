export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(jsx)$": "babel-jest", // only jsx needs explicit handling
  },
  moduleFileExtensions: ["js", "jsx"],
};
