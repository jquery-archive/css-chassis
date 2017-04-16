Chassis is creating open standards designed for CSS libraries, JavaScript UI libraries, and web developers in general. This project will define standards for markup and class names for common widgets and patterns, as well as an implementation of those standards. Similar to how DOM libraries can build upon [Sizzle](https://github.com/jquery/sizzle), we hope UI libraries will build upon this project.

Bottom line: it's like Bootstrap for Bootstrap (yodawg)

## Goals

* **Broad Device Support**: The number of devices being used around the world continues to grow. We aim to support a wide range of devices without sacrificing usability or aesthetics.
* **Performance**: The styles applied to your web page have a significant impact on, for example, how quickly the page can be rendered and how smoothly the page scrolls. We aim to keep this impact as small as possible.
* **Modularity**: Each component will be designed as separate modules, allowing customized builds of just the pieces you need.
* **Pushing Web Standards**: We will work with the W3C and WHATWG to improve CSS standards based on our work and feedback from the community.
* **Collaboration**: We value input and collaboration from the community. We don't want to just build yet another CSS library; we want to improve collaboration and interoperability across projects.

## Project Collaboration and Interoperability

If you maintain a JavaScript library that has UI components, we'd love for you to join our efforts. We'd be happy to hear your feedback and work through updates of your project(s) to support Chassis. If you have the time and interest to help define the standards and improve on our implementation, that's even better! Check out the [contribution guidelines](https://github.com/jquery/css-chassis/blob/master/CONTRIBUTING.md) for more information.


## Getting started

### Prerequisites

[Node.js and npm](http://nodejs.org/download/) should be installed, [as well as `grunt-cli`](http://gruntjs.com/getting-started).

### Building

Once you've cloned Chassis to your machine, run these commands:
```bash
$ npm install
$ grunt build
```

### Develop

To automate the build process during development, run the `grunt watch` task to compile SCSS upon file change.

```bash
$ grunt watch
```

### Grunt Tests

To run the tests locally run:

```bash
$ grunt test
```
Make sure you run the tests before creating a pull request.

### Performance testing

#### Setup

* Follow the steps for building above
* Ensure you have both Firefox and Chrome browsers installed
* [Download and start CouchDB](http://couchdb.apache.org/#download)

#### Running the tests

Once you have completed the setup run this:
```bash
$ grunt perf
```

*__DO NOT USE YOUR COMPUTER WHILE TESTS ARE RUNNING__*

Once the tests completed, [view the results](http://localhost:5984/css-performance/_design/site/index.html#/page-select).

#### Viewing the test pages

Follow the steps above to build. Once that is complete run this:
```bash
$ grunt connect:dev
```
This will start a connect server that will run until you stop it (`Ctrl+C`). Then go to http://localhost:4200/framework/{framework name}/component/{component name}/count/{ # of components to render}/ and you can see the generated test page.
