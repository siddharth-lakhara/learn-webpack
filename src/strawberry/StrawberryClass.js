import StrawBerry from '../img/strawberry.jpg';
import './strawberry.css';

class StrawBerryClass {
  render() {
    const img = document.createElement('img');
    img.alt = 'Strawberry';
    img.src = StrawBerry;
    img.classList.add('strawberry')

    document.querySelector('body').append(img);
  }
}

export default StrawBerryClass;