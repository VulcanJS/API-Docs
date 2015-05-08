module.exports = function(grunt) {
  grunt.initConfig({
    jsdoc : {
      dist : {
        options: {
          destination: 'docs',
          template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
          configure : "jsdoc.conf.json",
          recurse : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
}