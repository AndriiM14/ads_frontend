module.exports = {
    testEnvironment: "jsdom",
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    collectCoverageFrom: ["./src/**"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass|png|jpg|ico|svg)$": "babel-jest",
    },
    testPathIgnorePatterns: ["node_modules/firebase/*"]
};