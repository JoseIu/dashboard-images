import { MyPhoTos } from '../interfaces/myPhotos.interface';

const saveToStorage = (image: MyPhoTos) => {
  //Check if there is any item in the local storage
  const images = JSON.parse(localStorage.getItem('savedImages') || '[]');

  localStorage.setItem('savedImages', JSON.stringify([...images, image]));
};

export default saveToStorage;
