'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'empress-blog-casper',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    blog: {
      title: "Kex's blog",
      description: 'Full of weeb since 2019.',
      coverImage: '/images/bcover.png',

      navigation: [{
        label: 'Home',
        route: 'index'
      }, {
        label: 'About Me',
        route: 'page',
        id: 'about-me'
      }, {
		label: 'AniList',
		link: 'https://anilist.co/user/Kex1016/'
	  }, {
		label: 'Donate',
		route: 'page',
		id: 'donate'
	  }]
    },

    'responsive-image': {
      sourceDir: 'images',
      destinationDir: 'responsive-images',
      quality: 80,
      supportedWidths: [2000, 1000, 600, 300],
      removeSourceDir: false,
      justCopy: false,
      extensions: ['jpg', 'jpeg', 'png', 'gif']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
