module.exports = () => {
    return {
      files: [
        'src/**/*.js',
      ],
      tests: [
        'tests/**/*.spec.js'
      ],
      env: {
        type: 'node',
        runner: 'node'
      },
      testFramework: 'jest'
    };
  };