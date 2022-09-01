module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  react: { useSuspense: false },

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
