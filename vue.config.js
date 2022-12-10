const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/GitHubForks/dbd-randomizer-3-killer-perks/"
      : "/",
});
