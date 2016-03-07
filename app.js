var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.config.dev');
var bundler = webpack(webpackConfig);

browserSync({
    server: {
      baseDir: 'app',
      middleware: [
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should provide publicPath by ourselves
          // for other settings see http://webpack.github.io/docs/webpack-dev-middleware.html
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true }
        }),
        webpackHotMiddleware(bundler)
      ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      'app/css/*.css',
      'app/*.html'
    ]
});
