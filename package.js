Package.describe({
  name: 'jeremysaks:underscore-nudge',
  version: '0.1.0',
  summary: 'Add all latest underscore functionality to Meteor underscore.',
  git: 'https://github.com/JeremySaks/underscore-nudge',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use([
    'ecmascript',
    'underscore'
  ]);
  api.addFiles([
    'lib/pre.js',
    'lib/nudge.js'
  ]);
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'underscore',
    'tinytest'
  ]);
  api.addFiles([
    'lib/pre.js',
    'underscore/underscore-min.js'
  ]);
  api.use('jeremysaks:underscore-nudge');
  api.addFiles('tests/tests.js');
});
