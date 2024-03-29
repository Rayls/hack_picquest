/*
Dawson Reid
Glavin Wiechert
*/

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            head: {
                files: {
                    'site/js/head.min.js' : [ 'temp/js/head/**.js' ]
                }
            },
            foot: {
                files: {
                    'site/js/foot.min.js': [ 'temp/js/foot/**.js' ]
                }
            }
        },

        bower: {
            install: {
                install: true
            }
        },

        mkdir: {
            site: {
                create: [
                    'site/css',
                    'site/js',
                    'site/sass'
                ]
            }
        },
       
        sass: {
            site: {
                files: {
                    'site/css/main.css': 'site/sass/main.scss'
                }
            }
        },

        less: {
            site: {
                files: {
                    'site/css/main.less.css': 'site/less/*.less'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            
            sass: {
                files: ['site/sass/*.scss'],
                tasks: ['sass']
            },

            less: {
                files: ['site/less/*.less'],
                tasks: ['less']
            }
        }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', [

  ]);

  grunt.registerTask('init', [
    'mkdir'
  ])

};
