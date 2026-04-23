/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://passwordgenerator.one",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
