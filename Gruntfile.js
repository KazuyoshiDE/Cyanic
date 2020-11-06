const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: false,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    './www/css/style.css': './scss/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('postcss-object-fit-images'),
                    require('postcss-momentum-scrolling'),
                    require('postcss-will-change-transition'),
                    require('postcss-will-change'),
                    require('postcss-easing-gradients'),
                    require('postcss-fixes'),
                    require('autoprefixer')({
                        overrideBrowserslist: [
                            'last 2 versions',
                            'ie >= 9',
                            'Android >= 2.3',
                            'ChromeAndroid > 20',
                            'FirefoxAndroid > 20',
                            'iOS >= 8'
                        ]
                    })
                ]
            },
            dist: {
                src: [
                    '/www/css/style.css'
                ]
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: false,
                output: {
                    comments: 'all'
                }
            },
            dist: {
                files: {
                    'www/js/bundle.min.js': [

                        // vendor
                        'node_modules/@fortawesome/fontawesome-free/js/all.js',
                        'node_modules/particles.js/particles.js',
                        'node_modules/slick-carousel/slick/slick.min.js',

                        // 'js/directory/file.js'

                        // design
                        'js/design/navbarScroll.js',
                        'js/design/navbarOpen.js',
                        'js/design/loadingscreen.js',
                        'js/design/particlesJS.js',

                        // modules
                        'js/modules/slickCarousel.js'
                    ]
                }
            }
        },
        watch: {
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['sass', 'postcss', 'uglify', 'watch']);
};
