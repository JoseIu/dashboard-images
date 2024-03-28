import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import ImageCard from '../ImageCard/ImageCard';
import style from './ImagesSavedList.module.scss';

interface ImagesSavedListProps {
  images: MyPhoTos[];
  isMyPhotosPage?: boolean;
}

const ImagesSavedList = ({ images, isMyPhotosPage = false }: ImagesSavedListProps) => {
  return (
    <div className={`${style.images} wrapper`}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} isMyPhotosPage={isMyPhotosPage} />
      ))}
    </div>
  );
};

export default ImagesSavedList;
