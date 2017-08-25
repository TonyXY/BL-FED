# bolin

> this is a bolin project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Folder Structure

├── build
│   ├── dev-server.js         # development server script
│   ├── webpack.base.conf.js  # shared base webpack config
│   ├── webpack.dev.conf.js   # development webpack config
│   ├── webpack.prod.conf.js  # production webpack config
│   └── ...
├── src
│   ├── main.js               # app entry file
│   ├── App.vue               # main app component
│   ├── components            # ui components
│   │   └── ...
│   └── assets                # module assets (processed by webpack)
│       └── ...
├── static                    # pure static assets (directly copied)
├── dist                      # built files ready for deploy
├── test
│   └── unit                  # unit tests
│       └── ...
│   └── e2e                   # e2e tests
│       └── ...
├── .babelrc                  # babel config
├── .eslintrc.js              # eslint config
├── index.html                # main html file
└── package.json              # build scripts and dependencies

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
