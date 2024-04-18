import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
// TODO: Import yellow robot image as 'Yellow'
import Yellow from '../images/yellow-robot.png';
import Blue from '../images/blue-robot.png';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
document.getElementById('box').src = Yellow;


// TODO: Set src of #box element to Yellow
