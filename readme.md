# Flywheel Adapt Docs

This is the documenation for [Flywheel Adapt](https://github.com/flywheel-co/flywheel-adapt). Follow the guide below for local installation and making updates to improve on the documentation. 

## Installation

The Flywheel Adapt Documentation can be installed by cloning the repository, and installing its dependencies. 

```sh
git clone git@github.com:Flywheel-Co/flywheel-adapt.git
yarn 
```

## Building

The build system is powered by gulp and contains options for building for both `development` and `production` environments.

#### Development

```sh
gulp 
```

Running the `gulp` command on its own will build for development. This will watch for changes as well as update the browser via LiveReload.

#### Production

```sh
gulp --env-="production"
```

Running the `gulp` command with the `--env` argument set to `production` will generate a minified, optimized production build. 

## Server Setup

[Vue Router](https://router.vuejs.org/) requires some additional server-level configuration to route all requests through the proper index file. See the [example configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) in the Vue Router documentation, or implement the [Laravel Valet driver](https://laravel.com/docs/master/valet#custom-valet-drivers) found in `/support`.

## Data

Each page has its configuration data defined in `/assets/src/js/config/pages.js`. Here you can modify the page title or introductory content. 

In addition to the main pages configuration file, each page has a corresponding YAML manifest where the page's child items are defined. These files can be found in `/assets/src/data/{page.id}.yml`.

Each YAML file is then converted to JSON during the build process and passed along into our Vue Router application. 

In the future the goal is to export data directly from the source using SassDoc, although at present, SassDoc does not properly parse the Flywheel Adapt source. 