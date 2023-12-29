Package.describe({
  name: 'templating-compiler',
  summary: "Compile templates in .html files",
  version: '1.4.2',
  git: 'https://github.com/meteor/blaze.git',
  documentation: null
});

Package.registerBuildPlugin({
  name: "compileTemplatesBatch",
  use: [
    'ecmascript@0.16.7',
    'caching-html-compiler@1.2.1',
    'templating-tools@1.2.3'
  ],
  sources: [
    'compile-templates.js'
  ]
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
