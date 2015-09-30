module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws-lambda');
  grunt.loadNpmTasks('grunt-writefile');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.initConfig({
    jscs: {
      src: './*.js',
      options: {
        config: '.jscsrc',
        esnext: false,
        verbose: true,
        requireCurlyBraces: [],
      },
    },
    writefile: {
      options: {
        data: {
          someVar: process.env.MY_BUILD_VAR,
          anotherVar: process.env.ANOTHER_BUILD_VAR,
        },
      },
      index: {
        src: 'build/env.hbs',
        dest: '.env',
      },
    },
    lambda_invoke: {
      default: {
        options: {
          file_name: 'handler.js',
        },
      },
    },
    lambda_package: {
      default: {
        options: {
          include_files: ['.env'],
        },
      },
    },
    lambda_deploy: {
      default: {
        arn: process.env.DEPLOY_ARN,
        options: {},
      },
    },
  });
  grunt.registerTask('run', ['jscs', 'lambda_invoke']);
  grunt.registerTask('check', ['jscs']);
  grunt.registerTask('config', ['writefile']);

  grunt.registerTask('build', ['jscs', 'config', 'lambda_package']);
  grunt.registerTask('build-nochecks', ['config', 'lambda_package']);
  grunt.registerTask('deploy', ['build', 'lambda_deploy']);
  grunt.registerTask('deploy-nochecks', ['build-nochecks', 'lambda_deploy']);
};
