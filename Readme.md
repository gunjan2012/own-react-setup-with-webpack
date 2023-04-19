# React App with Webpack:

This is a boilerplate setup for a React app with Webpack. It includes the basic configuration needed to get started with a React project, including a development server and a production build script.

Tools used:

- Package Manager: **npm**
- Bundler: **webpack**
- Compiler: **babel**

## Dependencies of this setup:

- **react** : The react package contains only the functionality necessary to define React components.It is typically used together with a React renderer like react-dom for the web.
- **react-dom** : This package serves as the entry point to the DOM and server renderers for React.

## Dev Dependencies of this setup:

- **webpack module** : Which include all core webpack functionality
- **webpack-dev-server** : This development server automatically rerun webpack when our file is changed
- **webpack-cli** : It enable running webpack from the command line
- **webpack-merge** : Used for merge common webpack file with production and development files.
- **@pmmmwh/react-refresh-webpack-plugin**: A Webpack plugin to enable "Fast Refresh" (also previously known as Hot Reloading) for React components.
- **@babel/core**: The core module that wraps everything in transform script (used for integrations).
- **@babel/preset-env**: It is the default Babel preset used to transform ES6+ into valid ES5 code.
- **@babel/preset-react**: It is used for transforming JSX and React class syntax into valid JavaScript code.
- **@babel/plugin-transform-runtime** : Purpose of this transformer is to create a sandboxed environment(is an environment in which unsafe software code can execute without affecting network resources or local applications.) for your code.
- **@babel/runtime**: A library that contains Babel modular runtime helpers.
- **babel-loader**: It is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.
- **css-loader**: This allows loading css files.
- **file-loader** : It is a loader used mainly for supporting images such as SVG and PNG, and fonts in your webpack project.
- **html-webpack-plugin**: Simplifies creation of HTML files to serve your webpack bundles.
- **prettier** : It is an opinionated code formatter that supports a lot of different programming languages, like: JavaScript. JSON. JSX. CSS.
- **style-loader** : Takes CSS you've imported in your JavaScript files, and injects them as `<style></style>` tags into the DOM.
- **svg-url-loader** : It is used for loading svg images in our webapplication.

## Installation

To get started, clone this repository to your local machine and install the dependencies using npm.

```
npx @gunjan_2001/create-react-app-using-webpack YOUR-PROJECT-NAME
```

## Development

To start the development server, run the following command:

```
npm run start
```

## Production:

To build the production version of the app, run the following command:

```
npm run build
```

This will create a `build` directory with the compiled and optimized files for production. You can then deploy this directory to a web server to serve your app.
