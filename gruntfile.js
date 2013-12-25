module.exports = function(grunt) {

  // Libs
  var bootstrap = 'build/js/lib/bootstrap.min.js';

  // Main JS
  var mainjs = 'build/js/main.js';
  

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['**/*.js', '**/*.scss', '**/*.html', '**/*.php'],
        tasks: ['concat', 'uglify', 'sass', 'concat_css', 'cssmin', 'clean'],
        options: {
          spawn: false,
          livereload: true 
        },
      },
    }, // Watch

    concat: {
      options: {
        separator: '\n\n\n'
      },
      js: {
        src: [bootstrap, mainjs],
        dest: 'js/main.js'
      },
      css: {
        src: ['css/lib/bootstrap.min.css', 'css/cache-style.css'],
        dest: 'css/style.css'
      }
    }, // concat

    uglify: {
      options: {
        banner: '/*! Want to know more about it? Access the file js/main.js ;) */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    }, // uglify

    sass: {                            
      dist: {               
        options: {                    
          style: 'expanded'
        },
        files: {                  
          'css/cache-style.css': 'build/scss/style.scss'
        }
      }
    }, // sass

    cssmin: {
      add_banner: {
        options: {
          banner: '/* Want to know more about it? Access the file css/style.css ;) */'
        },
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    }, // cssmin

    copy: {
      main: {
        src: 'src/*',
        dest: 'dest/',
      },
    }, // copy

    clean: {
      build: {
        src: ['css/cache-style.css', '.sass-cache']
      }
    } // clean

  });


  // Load the plugin(s).
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'concat_js', 'sass', 'concat_css', 'cssmin', 'clean']);
  grunt.registerTask('concat_js', ['concat:js']);
  grunt.registerTask('concat_css', ['concat:css']);

};