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

        less: {

        }
  });

  // load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'uglify',
    'less'
  ]);

};
