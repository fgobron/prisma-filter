# Prisma filter es6 module
Independant module for filtering Prisma Media clients list sample

## Prerequisites
Successfully tested with

* node -v v10.16.0
* npm -v 6.9.0 (which comes bundled with Node)

## Quick test

1. Install the global packages.

    `npm install gulp -g`

2. Install the local packages for this demo.

    `npm install`

3. Run Gulp for Babel transpilation and watcher.

    `gulp`

4. Run in another terminal the server, launch the browser.

    `npm test`

URL examples :

// brown eye color and age between 20 and 25 filters

<http://localhost:3000/?eyeColor=brown&ageRange=20-25>

// blue eye color and age between 26 and 30 filters

<http://localhost:3000/?eyeColor=blue&ageRange=26-30>

## Module usage

1. Add Package dependency
"prisma-filter": "git+https://github.com/fgobron/prisma-filter.git#master"

2. Import module
``import generateFilteredList from 'prisma-filter/js/index';``

3. Call default function
``generateFilteredList();``

## Author

**Frédéric GOBRON**

-   Website: <http://alternetdev.net/>

## License

The code is available under the [MIT license](LICENSE).