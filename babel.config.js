module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel',
    '@babel/plugin-transform-private-methods'
  ],
  overrides: [{
    "plugins": [
      ["@babel/plugin-transform-private-methods", {
        "loose": true
      }]
    ]
  }]
};