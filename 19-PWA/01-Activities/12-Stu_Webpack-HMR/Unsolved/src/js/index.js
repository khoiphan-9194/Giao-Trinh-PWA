import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';


/* Hot module replacement swaps out or removes entire module at runtime without reloading.
This can help speed up development. Any time you make an edit to a CSS, JS, or HTML file,
the files will be hot swapped. See more comments in `webpack.config.js` */

//TODO: Add logic for Hot Module Reloading
/* If hot module replacement is enabled, then `module.hot` will be defined.
HMR is an opt-in feature, so it only runs in modules that contain HMR code.
It allows the developer to replace modules with new versions without having 
to restart the app or refresh the page. This feature doesn't need to be 
enabled on every module, because events will bubble up to the parent module. */
if (module.hot) {
    module.hot.accept((err) => {
      if (err) {
        console.error('Cannot apply HMR update.', err);
      }
    });
  }
  
  document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = Yellow;