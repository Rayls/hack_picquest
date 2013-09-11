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
            target: {
                files: {
                    'site/js/head.min.js' : [
                    ],
                    'site/js/foot.min.js' : [
                    ]
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
                    'site/js'
                ]
            },
            source: {
                create: [
                    'source/cljs',
                    'source/coffee',
                    'source/css',
                    'source/js',
                    'source/less',
                    'source/sass',
                    'source/styl',
                    'source/type'
                ]
            },
            temp: {
                create: [
                    'temp/css',
                    'temp/js'
                ]
            }

        },

        watch: {
            options: {
                livereload: true
            },
            cljs: {
                files: ['source/cljs/**.cljs'],
                tasks: []
            },
            coffee: {
                files: ['source/coffee/**.coffee'],
                tasks: []
            },
            css: {
                files: ['source/css/**.css'],
                tasks: ['copy:css']
            },
            js: {
                files: ['source/js/**.js'],
                tasks: ['copy:js']
            },
            less: {
                files: ['source/less/**.js'],
                tasks: []
            },
            styl: {
                files: ['source/styl/**.styl'],
                tasks: []
            },
            type: {
                files: ['source/type/**.type'],
                tasks: []
            }
        },

        copy: {
            css: {
                expand: true,
                src: 'source/css/**',
                dest: 'temp/css',
                flatten: true,
                filter: 'isFile'
            },
            js: {
                expand: true,
                src: 'source/js/**',
                dest: 'temp/js/',
                flatten: true,
                filter: 'isFile'
            }
        }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [

  ]);

  grunt.registerTask('init', [
    'bower',
    'mkdir'
  ])

};
