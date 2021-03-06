# L-Systems Renderer

Simple L-Systems Renderer. [Check it out here](http://piratefsh.github.io/p5js-art/public/lsystems/).

![l systems renderer screenshot](https://pbs.twimg.com/media/Ch4Go8DXEAYG2wy.jpg:large)

## Development 
### Install
```
npm install
npm install webpack-dev-server webpack -g
```

### Serve

To serve at http://localhost:8080/:

```
npm start
```

or

```
webpack-dev-server --inline  --content-base public/ 
```

### Build

To compile HTML/CSS and JavaScript files for production (at `public/lsystems`):

```
npm run build
```

or

```
webpack --config webpack.config.js
```
