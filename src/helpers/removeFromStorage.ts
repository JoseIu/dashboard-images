import { MyPhoTos } from '../interfaces/myPhotos.interface';

const removeFromStorage = (id: string) => {
  const images: MyPhoTos[] = JSON.parse(localStorage.getItem('savedImages') || '[]');

  if (!images.length) return;

  const newImages = images.filter((image) => image.id !== id);

  localStorage.setItem('savedImages', JSON.stringify(newImages));
};

export default removeFromStorage;
