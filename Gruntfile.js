'use strict';

module.exports = function (grunt) {
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('amber-dev');

    // To minify the HTML
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    var path = require('path'),
        helpers = require('amber-dev').helpers;

    // Default task.
    grunt.registerTask('default', ['amdconfig:app', 'amberc:all']);
    grunt.registerTask('test', ['amdconfig:app', 'requirejs:test_runner', 'exec:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy', 'htmlmin:dist']);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "bower_components", "amber"),
                configFile: "config.js"
            },
            all: {
                src: [
                    'src/OndafSimulator.st', // list all sources in dependency order
                    'src/OndafSimulator-Tests.st' // list all tests in dependency order
                ],
                amd_namespace: 'amber-ondafsimulator',
                libraries: ['amber_core/SUnit', 'amber/web/Web', 'silk/Silk']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'docs/index.html': 'index.html' // 'destination': 'source'
                }
            }
        },

        requirejs: {
            options: {
                useStrict: true
            },
            deploy: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "amber/compatibility": "/*stub*/",
                        "amber/Platform": "/*stub*/",
                        "app": 'define(["deploy"],function(x){return x});'
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'config-browser', 'node_modules/requirejs/require', 'app', 'amber/lazypack'],
                    optimize: "uglify2",
                    out: "docs/the.js"
                }
            },
            devel: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "amber/compatibility": "/*stub*/",
                        "amber/Platform": "define()", //eg. nothing, TODO remove
                        "amber_core/_platform_HaX_": "require.config({map:{'*':{'amber/Platform':'app'}}});", // TODO remove
                        "app": 'define(["devel", "amber_core/Platform-Browser"],function(x){return x});'
                    },
                    include: ['config', 'config-browser', 'amber_core/_platform_HaX_' /*TODO remove*/, 'node_modules/requirejs/require', 'app'],
                    exclude: ['devel'],
                    out: "the.js"
                }
            },
            test_runner: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "amber/Platform": "define()", //eg. nothing, TODO remove
                        "app": "(" + function () {
                            define(["testing", "amber_core/Platform-Node", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize().then(function () {
                                    amber.globals.NodeTestRunner._main();
                                });
                            });
                        } + "());"
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['config-node', 'app', 'amber/lazypack'],
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
            }
        },

        exec: {
            test_runner: 'node test_runner.js'
        },

        clean: {
            test_runner: ['test_runner.js']
        }
    });

};
