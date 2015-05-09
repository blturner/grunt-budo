# grunt-budo

> Grunt task for budo.

grunt-budo is a simple wrapper around budo for use in your grunt-based projects.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-budo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-budo');
```

## The "budo" task

### Overview
In your project's Gruntfile, add a section named `budo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  budo: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

[Refer to budo's documentation for possible options](https://github.com/mattdesl/budo#cli)

### Usage Examples

#### Basic usage

```js
grunt.initConfig({
  budo: {
    options: {
      debug: true,
      live: true
    },
    src: ['app/index.js']
  },
});
```
