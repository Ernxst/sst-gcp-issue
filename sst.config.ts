/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-gcp",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
    };
  },
  async run() {
    const gcp = await import("@pulumi/gcp")

    new sst.cloudflare.Worker("Api", {
      handler: "./functions/index.ts",
    });

  },
});
