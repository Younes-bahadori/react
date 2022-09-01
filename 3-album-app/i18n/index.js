var en = require("./translations.en.json");
var fa = require("./translations.fa.json");

const i18n = {
  translations: {
    en,
    fa,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;