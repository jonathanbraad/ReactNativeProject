const { withDangerousMod, withPlugins } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withFirebaseRealtimeDatabase = (config) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const googleServicesPath = path.resolve(
        config.modRequest.projectRoot,
        'android',
        'app',
        'google-services.json'
      );
      if (!fs.existsSync(googleServicesPath)) {
        throw new Error(
          'Expected google-services.json file at: ' + googleServicesPath
        );
      }
      return config;
    },
  ]);
};

module.exports = (config) => withPlugins(config, [withFirebaseRealtimeDatabase]);
