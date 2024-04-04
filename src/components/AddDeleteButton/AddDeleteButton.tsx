import { useDispatch, useSelector } from 'react-redux';
import { addImage, deleteImage } from '../../features/myPhotosSlice/myPhotosSlice';
import removeFromStorage from '../../helpers/removeFromStorage';
import HeartFill from '../icons/HeartFill';
import HeartIcon from '../icons/HeartIcon';

import { toast } from 'react-toastify';
import { RooState } from '../../app/store';
import existImageInPhotos from '../../helpers/existImageInPhotos';
import saveToStorage from '../../helpers/saveToStorage';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import style from './AddDeleteButton.module.scss';

interface AddDeleteButtonProps {
  image: MyPhoTos;
  isMyPhotosPage: boolean;
  className: string;
}

const AddDeleteButton = ({ image, isMyPhotosPage, className }: AddDeleteButtonProps) => {
  const { images } = useSelector((state: RooState) => state.images);
  const imagesSaved = useSelector((state: RooState) => state.myPhoto.myPhotos);
  const dispatch = useDispatch();

  //DELETE FORM MY PHOTOS
  const handleDeleteImage = (id: string) => {
    dispatch(deleteImage(id));
    removeFromStorage(id);
    toast.success('Successfully deleted');
  };

  // ADD IMAGE TO MY PHOTOS
  const handleAddImage = (id: string) => {
    const findImage = images.find((image) => image.id === id);
    if (findImage === undefined) return;

    //CHECK IF IMAGE IS ALREADY IN MY PHOTOS AND STORAGE
    const existImage = existImageInPhotos(findImage.id, imagesSaved);
    if (existImage) return;
    dispatch(addImage(image));
    saveToStorage(image);
    toast.success('Image added to My Photos');
  };

  return (
    <>
      {isMyPhotosPage ? (
        <button
          aria-label="delete"
          onClick={() => handleDeleteImage(image.id)}
          className={`  ${className || ''}`}
        >
          <HeartFill className={style.icon} />
        </button>
      ) : (
        <button aria-label="add" onClick={() => handleAddImage(image.id)} className={` ${className || ''}`}>
          <HeartIcon className={style.icon} />
        </button>
      )}
    </>
  );
};

export default AddDeleteButton;
