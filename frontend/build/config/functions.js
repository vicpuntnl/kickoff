var options = {};

/**
 * Get the root of a specific type of folder
 * @param  {String} type The type, usually src/dest
 * @return {String}      The root path in question
 */
global.getRoot = function getRoot(type) {
    if(options[type].root !== undefined) {
        return options[type].root;
    }

    console.error('No root set for ' + type);

    return;
}

/**
 * Set the root of a specific type of folder
 * @param {String} type The type, usually src/dest
 * @param {String} path The path to set as root
 * @return {String}     The root specified
 */
global.setRoot = function setRoot(type, path) {
    if(!options[type]) {
        options[type] = {};
    }

    options[type].root = path;

    return options[type].root;
}

/**€
 * Get a option from the `gulpOptions` object
 *
 * @function get
 * @param  {String} type Type of the option to fetch
 * @param  {String} name Name of the option to fetch
 * @return {String}      Value of the option
 */
global.get = function get(type, name) {
    'use strict';

    if(options[type][name]) {
        return options[type][name];
    }

    console.error('Cannot get ' + type + ': ' + name);

    return null;
}

/**
 * Get the src option with a given name
 *
 * @function getSrc
 * @param   {String} name    The name of the scr to fetch
 * @return  {String}         The src for the given option
 */
global.getSrc = function getSrc(name) {
    'use strict';

    return get('src', name);
}

/**
 * Get the dest option with a given name
 *
 * @function getDest
 * @param   {String} name    The name of the scr to fetch
 * @return  {String}         The dest for the given option
 */
global.getDest = function getDest(name) {
    'use strict';

    return get('dest', name);
}

/**
 * Set a option from the `gulpOptions` object
 *
 * @function get
 * @param  {String} type Type of the option to set
 * @param  {String} name Name of the option to set
 * @return {String}      Value of the option
 */
global.set = function set(type, name, path) {
    'use strict';

    var root;

    if(!options[type]) {
        options[type] = {};
    }

    root = getRoot(type);

    if(!options[type][name]) {
        options[type][name] =
            (root)
                ? root + path
                : path;

        return options[type][name];
    }

    console.error('Gulp ' + type + ': ' + name + ' already exists!');

    return null;
}

/**
 * Set the src option with a given name
 *
 * @function setSrc
 * @param   {String} name    The name of the scr to fetch
 * @return  {String}         The src for the given option
 */
global.setSrc = function setSrc(name, path) {
    'use strict';

    return set('src', name, path);
}

/**
 * Set the dest option with a given name
 *
 * @function setDest
 * @param   {String} name    The name of the scr to fetch
 * @return  {String}         The dest for the given option
 */
global.setDest = function getDest(name, path) {
    'use strict';

    return set('dest', name, path);
}

/**
 * Removes the default project path from a given filename
 *
 * @function cleanFilename
 * @param  {String} fileName The filename to clean
 * @return {String}          A clean version of the filename
 */
global.cleanFilename = function cleanFilename(fileName) {
    'use strict';

    if(typeof fileName === 'string') {
        return fileName.replace(global.get('baseDir')
                + '/'
                + getSrc('js'), '');
    }

    return '';
}
