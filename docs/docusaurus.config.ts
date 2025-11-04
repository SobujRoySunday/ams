import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "AMS Documentation",
  tagline: "Academic Management System - Developer and User Docs",
  url: "https://SobujRoySunday.github.io", // Your GitHub Pages URL
  baseUrl: "/ams/", // Repo name with trailing slash!
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  organizationName: "SobujRoySunday", // Your GitHub username
  projectName: "ams", // Repository name

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/SobujRoySunday/ams/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

export default config;
