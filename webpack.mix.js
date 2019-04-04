const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});

mix.js('resources/js/main.js', 'public/js/app.js')
   // .sass('resources/sass/app.scss', 'public/css');
