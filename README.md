Stuff is in ES6 so you need to run Babel on it.

## Development

### Deps

[Chrome Extensions Reloader](https://github.com/arikw/chrome-extensions-reloader)

This is invoked by the build script.

[fswatch](https://github.com/emcrisostomo/fswatch)

Helps you run the build script automatically.

### Autobuild

Watch `src` for changes then build and reload automatically:

```sh
fswatch-run src "ruby build.rb"
```

The extension is built to `deploy/development/`.

## Deploy

```sh
ruby build.rb BUILD_ENV=production
```

Builds to `deploy/build-<the time>`
