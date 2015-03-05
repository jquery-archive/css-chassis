Chassis is an attempt at creating open standards designed for CSS libraries, JavaScript UI libraries, and web developers in general. This project will define standards for markup and class names for common widgets and patterns, as well as an implementation of those standards. Just like DOM libraries can build upon [Sizzle](https://github.com/jquery/sizzle), we hope UI libraries will build upon this.

## Goals

* **Broad Device Support**: The number of devices being used around the world continues to grow. We aim to support a wide range of devices without sacrificing usability or aesthetics.
* **Performance**: The styles applied to your web page have a significant impact on how quickly the page can be rendered and how smoothly the page scrolls, among other things.
* **Modularity**: Each component will be designed as separate modules, allowing customized builds of just the pieces you need.
* **Pushing Web Standards**: We will work with W3C and WHATWG to improve CSS standards based on our work and feedback from the community.
* **Collaboration**: We value input and collaboration from the community. We don't want to just build yet another CSS library; we want to improve collaboration and interoperability across projects.

## Project Collaboration and Interoperability

If you maintain a JavaScript library that has UI components, we'd love for you to join our efforts. We'd be happy to hear your feedback and work through updates of your project(s) to support CSS Framework. If you have the time and interest to help define the standards and improve on our implementation, that's even better! Check out the [contribution guidelines](https://github.com/jquery/css-chassis/blob/master/CONTRIBUTING.md) for more information.


## Getting started

### Prerequisites

Node.js and npm should be installed. [[installer]](http://nodejs.org/download/)

### Building

Once you've cloned Chassis to your machine, run `npm install` and `grunt build` from the root Chassis directory.

```
$ npm install
$ grunt build
```

### Performance testing

## Setup

* Follow the steps for building above
* Create directories for saving external files (`mkdir -p external/selenium`)
* Ensure you have both firefox and chrome browsers installed
* Download CouchDB from [http://couchdb.apache.org/#download](http://couchdb.apache.org/#download)
* Start CouchDB

## Running the tests

Once you have completed the setup run `grunt perf` from the root of the Chassis directory.
```
$ grunt perf
```

####DO NOT USE YOUR COMPUTER WHILE TESTS ARE RUNNING

When the tests complete go to [http://localhost:5984/css-performance/_design/site/index.html#/page-select](http://localhost:5984/css-performance/_design/site/index.html#/page-select) to view results

## Viewing the test pages

Follow the steps above to build. Once that is complete run `grunt connect:dev` from the root of the Chassis directory. This will start a connect server that will run until you stop it. Then go to http://localhost:4200/framework/{framework name}/component/{component name}/count/{ # of components to render}/ and you can see the generated test page.

