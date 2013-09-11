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

        mincss: {
            main: {
                files: {
                    'site/css/main.min.css': [ 'temp/css/**.css' ]
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
                    'source/css/css',
                    'source/css/less',
                    'source/css/sass',
                    'source/css/styl',

                    'source/cljs',
                    'source/coffee',
                    'source/js',
                    'source/type'
                ]
            },
            temp: {
                create: [
                    'temp/css',
                    'temp/js/foot',
                    'temp/js/head'
                ]
            }

        },

        watch: {
            options: {
                livereload: true
            },

            /* TODO
            Restart upon change to the grunt file.
             */
            grunt: {
                files: ['Gruntfile.js'],
                tasks: []
            },

            /*
            Watch source directories.
             */
            css_css: {
                files: ['source/css/**.css'],
                tasks: ['copy:css']
            },
            css_less: {
                files: ['source/less/**.js'],
                tasks: []
            },
            css_sass: {
                files: ['source/sass/**.js'],
                tasks: []
            },
            css_styl: {
                files: ['source/styl/**.js'],
                tasks: []
            },

            cljs: {
                files: ['source/cljs/**.cljs'],
                tasks: []
            },
            coffee: {
                files: ['source/coffee/**.coffee'],
                tasks: []
            },

            js_js_foot: {
                files: ['source/js/js/foot/**.js'],
                tasks: ['copy:js_foot']
            },
            js_js_head: {
                files: ['source/js/js/head/**.js'],
                tasks: ['copy:js_head']
            },
            js_type_foot: {
                files: ['source/type/**.type'],
                tasks: []
            },
            js_type_head: {

            },


            /*
            Minify contents of temp/css, temp/js/foot, and temp/js/head.
             */
            temp_css: {
                files: ['temp/css/**.css'],
                tasks: ['mincss:main']
            },
            temp_js_foot: {
                files: ['temp/js/foot/**.js'],
                tasks: ['uglify:foot']
            },
            temp_js_head: {
                files: ['temp/js/head/**.js'],
                tasks: ['uglify:head']
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
            js_foot: {
                expand: true,
                src: 'source/js/js/foot/**',
                dest: 'temp/js/foot/',
                flatten: true,
                filter: 'isFile'
            },
            js_head: {
                expand: true,
                src: 'source/js/js/head/**',
                dest: 'temp/js/head/',
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
  grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task(s).
  grunt.registerTask('default', [

  ]);

  grunt.registerTask('init', [
    'bower',
    'mkdir'
  ])

};
