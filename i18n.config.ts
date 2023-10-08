export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    fr: {
      "menu.home": "Accueil",
      "menu.about": "À propos",
      "menu.skills": "Compétences",
      "menu.projects": "Projets",
      "menu.contact": "Contact",
      "home.iam": "je suis",
      "home.introduction":
        "Je suis un développeur web habitant actuellement à Foix. J’aime développer des interfaces réactives, et j’ai une attirance pour le développement mobile hybride et l’UX design.",
      "home.sayHello": "Dire bonjour",
    },
    en: {
      "menu.home": "Home",
      "menu.about": "About",
      "menu.skills": "Skills",
      "menu.projects": "Projects",
      "menu.contact": "Contact",
      "home.iam": "I am",
      "home.introduction":
        "I'm a web developer living in Foix, France. I like to make reactive interfaces and I'm drawn to hybrid mobile development and UX design",
      "home.sayHello": "Say hello",
    },
  },
}));
