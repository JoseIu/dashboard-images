import { MyPhoTos } from '../interfaces/myPhotos.interface';

const existImageInPhotos = (id: string, imagesSaved: MyPhoTos[]): boolean => {
  const images: MyPhoTos[] = JSON.parse(localStorage.getItem('savedImages') || '[]');

  return imagesSaved.some((image) => image.id === id) || images.some((image) => image.id === id);
};

export default existImageInPhotos;
