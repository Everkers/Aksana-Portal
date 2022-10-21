const withPlugins = require("next-compose-plugins");
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = withPlugins([nextConfig], {});
