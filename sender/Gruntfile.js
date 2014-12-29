'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-connect');

  // Define the configuration for all the tasks
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          base: './app'
        }
      }
    },
    wiredep: {
      run: {
        src: [
          'app/index.html'
        ]
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server',
    function(target) {
      grunt.task.run([
        'connect:server'
      ]);
    });

  grunt.registerTask('run', 'Compile then start a connect web server',
    function(target) {
      grunt.task.run([
        'wiredep',
        'connect:server'
      ]);
    });
};
