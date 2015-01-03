// Generated on 2014-09-05 using generator-angular 0.9.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');

  // Define the configuration for all the tasks
  grunt.initConfig({
    'ftp-deploy': {
      receiver: {
        auth: {
          host: 'ftp.francescostrazzullo.info',
          port: 21,
          authKey: 'key1'
        },
        src: 'app/',
        dest: '/www.francescostrazzullo.info/blog/demo/fableon',
        exclusions: ['.htaccess']
      }
    },
    connect: {
      server: {
        options: {
          port: 9999,
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

  grunt.registerTask('run', 'Compile then start a connect web server', function(target) {
    grunt.task.run([
      'wiredep',
      'connect:server'
    ]);
  });

  grunt.registerTask('deploy', [
    'ftp-deploy:receiver'
  ]);
};
