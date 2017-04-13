```BASH
$ npm install
```

Start gulp and it will watch for changes and builds right away. Your browser will be refreshed automatically by Browsersync.

```BASH
$ npm run serve
```

To get ready for production use the following command. Sourcemaps will be stripped from the build files.

```BASH
$ npm run build:prod
```

### Full list of commands

#### `npm run clean`

Removes the entire `build` folder.

#### `npm run serve`

Builds everything and starts a browsersync session, watching for your changes.

#### `npm run build`

Builds the project includind sourcemaps for debugging.

#### `npm run build:prod`

Builds the project, ready for production use.

#### `npm run watch`

Watches all file changes and executes the corresponding tasks.
