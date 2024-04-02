import { MyPhoTos } from '../interfaces/myPhotos.interface';

const editFromStorage = (id: string | null, data: string) => {
  const imagesSaved: MyPhoTos[] = JSON.parse(localStorage.getItem('savedImages') || '[]');

  const findImage = imagesSaved.findIndex((image) => image.id === id);

  if (!findImage) return;

  imagesSaved[findImage].description = data;

  localStorage.setItem('savedImages', JSON.stringify([...imagesSaved]));
};

export default editFromStorage;
