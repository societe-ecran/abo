module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
    i18n: {
      /**
       * Provide the locales you want to support in your application
       */
      locales: [ "fr-FR"],
      /**
       * This is the default locale you want to be used when visiting
       * a non-locale prefixed path.
       */
      defaultLocale: "fr-FR",
    },
  };