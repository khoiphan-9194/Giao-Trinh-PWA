// TODO: Import yellow robot image as Yellow
// TODO: Import blue robot image as Blue
import Yellow from '../images/yellow-robot.png';
import Blue from '../images/blue-robot.png';


export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.src === Yellow) {
    box.src = Blue;
  } else {
    box.src = Yellow;
  }
};


/*
## Acceptance Criteria

* It's done when I have updated the `webpack.config.js` file to handle image assets.

* It's done when I have imported images into the `index.js` and `box.js` files as `Blue` and `Yellow`.

* It's done when I have set the `#box` element's src to `Yellow` to provide a default image when the page loads.

* It's done when I use `npm i` and `npm run build` to successfully build a `dist` folder and manually add the `index.html` file.

* It's done when I open the `dist/index.html` in the browser using Live Server and the images are displayed in the app.
*/