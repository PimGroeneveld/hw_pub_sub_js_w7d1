const config = {
  entry: `${__dirname}/src/app.js`,  //creates pathway -->${__dirname} states: start at this directory
  output: {
    path: `${__dirname}/public/js`, //standard location
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;

// basically says: start at src, and store it in public
// run file via "npm run build" --> then never look at file again unless original JS in src gets changed, update the bundle
// run npm run build everytime when update is needed
// use "scripts": {"build": "webpack -w",   --> to active watchmode so that it auto updates
