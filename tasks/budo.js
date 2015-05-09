/*
 * grunt-budo
 * https://github.com/blturner/grunt-budo
 *
 * Copyright (c) 2015 Benjamin Turner
 * Licensed under the MIT license.
 */

'use strict';

var budo = require('budo');
var extend = require('xtend');
var garnish = require('garnish');
var through = require('through');

module.exports = function(grunt) {
  grunt.registerMultiTask('budo', 'Grunt task for budo.', function() {
    var done = this.async();
    var opts = extend({}, this.options());
    var stream = through();
    var bundler;

    opts.stream = stream;

    stream
      .pipe(garnish())
      .pipe(toConsole());

    bundler = budo(this.filesSrc, opts);

    bundler.on('error', done);
  });
};

function toConsole() {
  return through(write);

  function write(data) {
    console.log(data.toString());

    this.queue(data);
  }
}
