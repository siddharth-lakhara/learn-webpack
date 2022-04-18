import StrawBerry from './img/strawberry.jpg';

const addImage = () => {
  const img = document.createElement('img');
  img.alt = 'Strawberry';
  img.width = 360;
  img.src = StrawBerry;

  document.querySelector('body').append(img);
}

export default addImage;