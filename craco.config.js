module.exports = {
  jest: {
    configure: {
      setupFilesAfterEnv: ['./src/setup-tests.ts'],
    },
  },
};
