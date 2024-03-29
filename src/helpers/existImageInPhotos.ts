import { MyPhoTos } from '../interfaces/myPhotos.interface';

const existImageInPhotos = (id: string, imagesSaved: MyPhoTos[]): boolean => {
  return imagesSaved.some((image) => image.id === id);
};

export default existImageInPhotos;
