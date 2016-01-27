/**
 * Configure paths
 */

/**
 * Root paths
 */
global.setRoot('dest',              './frontend/dist');
global.setRoot('src',               './frontend/src');
global.setRoot('styleguide',        './frontend/styleguide');

/**
 * Destination paths
 */
global.setDest('scss',              '/css');
global.setDest('js',                '/js');
global.setDest('font',              '/font');
global.setDest('img',               '/img');

/**
 * Source paths
 */
global.setSrc('scss',               '/scss');
global.setSrc('scssFiles',          '/scss/**/*.scss');
global.setSrc('js',                 '/js');
global.setSrc('jsFiles',            '/js/**/*.js');
global.setSrc('rjs-config',         '/js/require.config.js');
global.setSrc('font',               '/font/**/*');
global.setSrc('img',                '/img/**/*.{jpg,jpeg,png,gif,svg}');
global.setSrc('icon',               '/font/icons/*.svg');
global.setSrc('css',                '/css');            

