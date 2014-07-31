exports.config =
  # See http://brunch.io/#documentation for docs.
  plugins:
      less:
          dumplLineNumbers: 'comments'
  modules:
      wrapper: 'commonjs'
      definition: 'commonjs'
      nameCleaner: (path) ->
        path.replace(/^app\/js\//, '')

  files:
    javascripts:
      joinTo: 'app.js'
      order:
        before: [
          'vendor/js/modernizr.js',
          'vendor/js/jquery.js',
          'vendor/js/underscore.js',
          'vendor/js/knockout.js',
          'vendor/js/bootstrap/tooltip.js',
        ]
    stylesheets:
      defaultExtension: 'less',
      joinTo: 'app.css',
    templates:
      joinTo: 'app.js'

