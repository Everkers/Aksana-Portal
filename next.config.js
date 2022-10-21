const withPlugins = require("next-compose-plugins");
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    optimizeFonts: false,
};

module.exports = withPlugins([nextConfig], {});
