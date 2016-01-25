/**
 * Require configuration
 */
define([], function requireConfig() {
    'use strict';

    /**
    * Require configurations
    * @type {Object}
    */
    require.config({
        deps: [],
        baseUrl: './Frontend/src/js',
        paths: { // Reference aliases & Paths
            /**
             * 3rd party scripts
             */
            'jquery':           '../../bower_components/jquery/dist/jquery',
            'matchMedia':       '../../bower_components/matchMedia/matchMedia',

            /**
             * Modules
             */


            /**
             * Utilities
             */
            'global-var':               'utils/global-var',
            'object-array-util':       'utils/object-array',
            'breakpoints-util':         'utils/breakpoints'

},
        shim: { // Shim configurations

        }
    });
});
