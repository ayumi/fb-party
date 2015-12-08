## fb-party

Given an FB event and a list of emails, it invites corresponding FB peeps to the event.

WIP

###  Usage

1. Go to a FB event.
2. Click the browser extension button (it's a little pink ball).

## Development

### Deps

[Chrome Extensions Reloader](https://github.com/arikw/chrome-extensions-reloader)

This is invoked by the build script.

[fswatch](https://github.com/emcrisostomo/fswatch)

Helps you run the build script automatically.

### Dev extension

1. `ruby build.rb`
2. Drag deploy/development folder into Chrome.
3. Rebuild after you make changes.

## Autobuild

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
