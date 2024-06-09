import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import EmptyPage from '../EmptyPage/EmptyPage';
import ImageCard from '../ImageCard/ImageCard';

import style from './ImagesSavedList.module.scss';

interface ImagesSavedListProps {
  images: MyPhoTos[];
  isMyPhotosPage?: boolean;
}

const ImagesSavedList = ({ images, isMyPhotosPage = false }: ImagesSavedListProps) => {
  if (!images.length) return <EmptyPage isEmpty={false} />;
  return (
    <div className={`${style.images} wrapper`}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} isMyPhotosPage={isMyPhotosPage} />
      ))}
    </div>
  );
};

export default ImagesSavedList;
