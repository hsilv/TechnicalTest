export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/src/__mocks__/svgMock.js",
    "^@atoms/(.*)$": "<rootDir>/src/components/atoms/$1",
    "^@molecules/(.*)$": "<rootDir>/src/components/molecules/$1",
    "^@organisms/(.*)$": "<rootDir>/src/components/organisms/$1",
    "^@templates/(.*)$": "<rootDir>/src/components/templates/$1",
    "^@pages/(.*)$": "<rootDir>/src/components/pages/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@context/(.*)$": "<rootDir>/src/logic/context/$1",
    "^@hooks/(.*)$": "<rootDir>/src/logic/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/logic/utils/$1",
    "^@store/(.*)$": "<rootDir>/src/logic/store/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
