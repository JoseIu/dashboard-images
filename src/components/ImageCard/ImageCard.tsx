import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../../app/store';
import { addImage, deleteImage, selectImageById } from '../../features/imagesSlice/myPhotosSlice';
import existImageInPhotos from '../../helpers/existImageInPhotos';
import removeFromStorage from '../../helpers/removeFromStorage';
import saveToStorage from '../../helpers/saveToStorage';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import ArrowIcon from '../icons/ArrowIcon';
import EditIcon from '../icons/EditIcon';
import HeartFill from '../icons/HeartFill';
import HeartIcon from '../icons/HeartIcon';
import style from './ImageCard.module.scss';
interface ImageCardProps {
  image: MyPhoTos;
  isMyPhotosPage?: boolean;
}

const ImageCard = ({ image, isMyPhotosPage = false }: ImageCardProps) => {
  const images = useSelector((state: RooState) => state.images);
  const imagesSaved = useSelector((state: RooState) => state.myPhoto.myPhotos);

  const dispatch = useDispatch();

  // ADD IMAGE TO MY PHOTOS
  const handleAddImage = (id: string) => {
    const findImage = images.find((image) => image.id === id);
    if (findImage === undefined) return;

    //CHECK IF IMAGE IS ALREADY IN MY PHOTOS
    const existImage = existImageInPhotos(findImage.id, imagesSaved);

    if (existImage) return;
    dispatch(addImage(image));
    saveToStorage(image);
  };

  //DELETE FORM MY PHOTOS
  const handleDeleteImage = (id: string) => {
    dispatch(deleteImage(id));
    removeFromStorage(id);
  };

  //EDIT IMAGE
  const handleEdit = (id: string) => {
    dispatch(selectImageById(id));
  };

  return (
    <article className={style.card}>
      <img className={style.card__img} src={image.image} alt={image.alt_description} />

      {isMyPhotosPage ? (
        <button
          aria-label="delete"
          onClick={() => handleDeleteImage(image.id)}
          className={style.card__right}
        >
          <HeartFill className={style.card__icon} />
        </button>
      ) : (
        <button
          aria-label="add"
          onClick={() => handleAddImage(image.id)}
          className={style.card__right}
        >
          <HeartIcon className={style.card__icon} />
        </button>
      )}

      <button
        aria-label="add"
        className={style.card__bottom}
        onClick={() => handleAddImage(image.id)}
      >
        <ArrowIcon className={style.card__icon} />
      </button>

      {isMyPhotosPage && (
        <button aria-label="edit" className={style.card__left} onClick={() => handleEdit(image.id)}>
          <EditIcon className={style.card__icon} />
        </button>
      )}
    </article>
  );
};
export default ImageCard;
