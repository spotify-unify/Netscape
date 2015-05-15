# Web template

This is a template for a Node-based web application, using bower and
gulp.  It is based off of
[Swiip's excellent Yeoman generator](https://github.com/Swiip/generator-gulp-angular).

# Building and running

To get everything set up with a traditional Node setup, simply run:

    npm install -g bower gulp
    npm install
    bower install
    gulp

You can run tests with `gulp test`.  If you want to run the tests
every time your code changes (TDD style), you can use `gulp
test:auto`.

E2E tests can be run (Using phantomjs and karma via protractor) by
saying `gulp protractor`.

If you want to run the application, use `gulp serve`.  This also
enables BrowserSync for testing on mobile devices.

# Using Docker

This repository has a `Dockerfile`, which means it can be converted
into a Docker image, by using `docker build .`.

The script called `run.sh` can be used if you want to build a Docker
image and start it straight away.
