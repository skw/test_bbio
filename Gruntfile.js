module.exports = function( grunt ) {

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      templates: {
        files: ['client/templates/**/*.html'],
        tasks: ['compileTemplates']
      }
    },
    /*
    stylus: {
      compile: {
        options: {
          paths: ['src/styles', 'bower_components/bootstrap-stylus/stylus'],
        },
        files: {
          'public/style.css': ['src/styles/style.styl'] // compile and concat into single file
        }
      }
    }
    */
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          //'bower_components/hogan/lib/compiler.js',
          //'bower_components/hogan/lib/template.js',
          'bower_components/jquery/jquery.js',
          'bower_components/lodash/dist/lodash.js',
          'bower_components/backbone/backbone.js'
        ],
        dest: 'public/vendor/libs.js',
      },
    },
    hogan: {
      publish: {
        options: {
          prettify: true,
          defaultName: function(file) {
            return file.toUpperCase();
          }
        },
        files: {
          "client/templates.js": ["client/templates/**/*.html"]
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-hogan');
  
  // task(s).
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('watchL', ['watch']);
  grunt.registerTask('concatLibs', ['concat']);
  grunt.registerTask('compileTemplates', ['hogan']);
};