const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('./public')
    .postCss('src/main.css', 'themes/statamic-boilerplate/css/statamic-boilerplate.css')
    .options({
        postCss: [
            tailwindcss('tailwind.config.js'),
            require('autoprefixer')
        ],
        processCssUrls: false,
    })

    .js([
        'src/main.js',
    ], 'themes/statamic-boilerplate/js/statamic-boilerplate.js');

mix.browserSync({
    proxy: 'http://statamic-boilerplate.test',
    browser: 'firefox',
    files: ['**/*.html','/css/*.css']
});

mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.purgeCss({
        enabled: true,
        globs: [
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/templates/*.html'),
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/partials/*.html'),
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/partials/**/*.html'),
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/layouts/*.html'),
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/js/**.js'),
            path.join(__dirname, 'path.join(\'./public/themes/statamic-boilerplate/img/**.svg'),
        ],
        extensions: ['html', 'js', 'php', 'vue', 'svg'],
    })
};