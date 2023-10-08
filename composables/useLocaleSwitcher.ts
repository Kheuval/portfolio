export const useLocaleSwitcher = () => {
  const { locale } = useI18n();

  const switchLocale = () => {
    locale.value = locale.value === "fr" ? "en" : "fr";
  };

  return { locale, switchLocale };
};
