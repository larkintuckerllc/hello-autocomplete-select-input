module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
  },
};
