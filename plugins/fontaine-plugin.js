const { FontaineTransform } = require('fontaine');

module.exports = function fontainePlugin(context, options) {
  return {
    name: 'fontaine-plugin',
    configureWebpack(config, isServer) {
      if (!isServer) {
        return {
          plugins: [
            FontaineTransform.webpack({
              fallbacks: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
              ],
              resolvePath: (id) => {
                // Handle local font paths
                if (id.startsWith('/fonts/')) {
                  return `${context.siteDir}/static${id}`;
                }
                return id;
              },
            }),
          ],
        };
      }
      return {};
    },
  };
};