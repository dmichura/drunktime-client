import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import translations from "./../i18n";

const i18n = new I18n(translations);
i18n.defaultLocale = "en";
i18n.fallbacks = true;

const setLocale = (locale) => {
  i18n.locale = locale;
};

export { i18n, setLocale };
