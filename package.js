Package.describe({
  name: 'jeremysaks:underscore-nudge',
  version: '1.8.3',
  summary: 'Add new underscore functionality to Meteor underscore.',
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
    'src/underscore-min.1.8.3.js',
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
    'src/underscore-min.1.8.3.js'
  ]);
  api.use('jeremysaks:underscore-nudge');
  api.addFiles('tests/tests.js');
});
