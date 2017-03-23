module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    basePath: __dirname,
    files: [
      'public/bundle.js',
      'tests/**/*.spec.js'
    ],
    reporters: ['mocha']
  });
};