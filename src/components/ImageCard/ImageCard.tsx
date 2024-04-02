import { useDispatch } from 'react-redux';
import { selectImageById } from '../../features/imagesSlice/myPhotosSlice';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import AddDeleteButton from '../AddDeleteButton/AddDeleteButton';
import ImafeCardDescription from '../ImageCardDescription/ImafeCardDescription';
import ArrowIcon from '../icons/ArrowIcon';
import EditIcon from '../icons/EditIcon';
import style from './ImageCard.module.scss';
interface ImageCardProps {
  image: MyPhoTos;
  isMyPhotosPage?: boolean;
}

const ImageCard = ({ image, isMyPhotosPage = false }: ImageCardProps) => {
  const dispatch = useDispatch();

  //EDIT IMAGE
  const handleEdit = (id: string) => {
    dispatch(selectImageById(id));
  };

  return (
    <article className={style.card}>
      <div className={style.card__top}>
        <img className={style.card__img} src={image.image} alt={image.alt_description} />

        <AddDeleteButton className={style.card__right} image={image} isMyPhotosPage={isMyPhotosPage} />
        <a type="buttpn" aria-label="download" className={style.card__bottom} href={image.image} download>
          <ArrowIcon className={style.card__icon} />
        </a>

        {isMyPhotosPage && (
          <button aria-label="edit" className={style.card__left} onClick={() => handleEdit(image.id)}>
            <EditIcon className={style.card__icon} />
          </button>
        )}
      </div>
      <ImafeCardDescription
        isMyPhotosPage={isMyPhotosPage}
        description={image.description}
        width={image.width}
        height={image.height}
        likes={image.likes}
        created_at={image.created_at}
      />
    </article>
  );
};
export default ImageCard;
