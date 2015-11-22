This project is an exercise to build a browserifiy/commonJS workflow for [Tyler McGiniss's React Tutorial](http://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/).  Each component is in its own file, and the project is built using browserify, watchify and gulp.  

It's organized like this:

```
- src
  - App.jsx  -- the main App file
  - components
    - AddFriend.jsx
    - FriendsContainer.jsx
    - ShowList.jsx
- public
  - bundle.js  -- the browserified version of the app
  - index.html -- the index file copied over from `src`
```

To get started:

* Download the repo
* Run `npm install`
* Run `gulp watch`
* Start a web server.  There is probably a way to do this with Gulp, as well, but I'm using `python -m SimpleHTTPServer`

The js in the `public` directory is rebuilt whenever you change the source files in the `src` directory..




## Setting up a project for the *very* first time

First, do `npm init` to get the package started.  Just hit the enter key to accept all the details.

Then, install the `npm` packages we'll need:

```
npm install --save-dev vinyl-source-stream;
npm install --save-dev browserify;
npm install --save-dev watchify;
npm install --save-dev reactify;
npm install --save-dev gulp-streamify;
npm install --save-dev gulp-uglify;
npm install --save-dev react;
```
