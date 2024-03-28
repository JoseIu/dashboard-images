import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../../app/store';
import { addImage, deleteImage } from '../../features/imagesSlice/myPhotosSlice';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import ArrowIcon from '../icons/ArrowIcon';
import HeartFill from '../icons/HeartFill';
import HeartIcon from '../icons/HeartIcon';
import style from './ImageCard.module.scss';
interface ImageCardProps {
  image: MyPhoTos;
  isMyPhotosPage?: boolean;
}

const ImageCard = ({ image, isMyPhotosPage = false }: ImageCardProps) => {
  const images = useSelector((state: RooState) => state.images);
  const imagesSaved = useSelector((state: RooState) => state.myPhoto);

  const dispatch = useDispatch();

  // ADD IMAGE TO MY PHOTOS
  const handleAddImage = (id: string) => {
    const findImage = images.find((image) => image.id === id);
    if (findImage === undefined) return;

    //CHECK IF IMAGE IS ALREADY IN MY PHOTOS
    const existImage = isImageInPhotos(findImage.id, imagesSaved);

    if (existImage) return;
    dispatch(addImage(image));
  };

  //DELETE FORM MY PHOTOS
  const handleDeleteImage = (id: string) => {
    dispatch(deleteImage(id));
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

      {isMyPhotosPage ? <button className={style.card__left}>EDIT</button> : null}
    </article>
  );
};

const isImageInPhotos = (id: string, imagesSaved: MyPhoTos[]): boolean => {
  return imagesSaved.some((image) => image.id === id);
};

export default ImageCard;
