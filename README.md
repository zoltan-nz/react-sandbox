# React TypeScript Sandbox

## npm scripts

```
$ npm run clean
$ npm run prettier
$ npm run start:dev
$ npm run lint
$ npm run build
$ npm run test:watch
$ npm run test
```

## Add bootstrap

```
$ npm install --save bootstrap reactstrap
$ npm i --save-dev @types/reactstrap
```

Add to `./src/index.tsx`:

```
import 'bootstrap/dist/css/bootstrap.css';
```

- [Reactstrap](https://github.com/reactstrap/reactstrap)

## Using SCSS

Rename all `css` file to `scss`.

TODO:

* Figuring out, how `scss` is compiled to `css`.

## Adding Bootstrap 4

* Bootstrap 4 component library: [ReactStrap](https://reactstrap.github.io/)

```
$ npm i -S bootstrap
$ npm i -S reactstrap
$ npm i -D @types/reactstrap
```

TODO:

* Import the default Bootstrap css
* Use `reactstrap` components
* Using own `variables` for customizing Bootstrap

### Attack plan

1. Add sass support first
2. Add sass based bootstrap 4 library with custom variables
3. Add bootstrap component library (`reactstrap`)
