# Base setup for front-end files (new projects)

## Build
Here you find the config and tasks for the front-end build process (gulp)

## Dist
The distribution folder.You will find all generated files here (compiled css, js, icons, etc.)

## Src
Source file folder for all source: fonts, img, js, scss. 

## Styleguide
Base folder for styleguide (patternlab). Also see styleguide task in 'build/tasks'.


# Install

## In root folder, install node_modules
```
npm install
```

## In '/frontend' folder, install bower_components
```
cd frontend
bower install
```

## Optional: in '/frontend/styleguide' folder, install patternlab
```
https://github.com/pattern-lab/patternlab-node
```
The 'frontend/build/tasks/styleguide.js' automatically copies the '/frontend/dist' files to Patternlab.

Note: Patternlab has it's own gulp file. The generation of the styleguide is stand-alone.