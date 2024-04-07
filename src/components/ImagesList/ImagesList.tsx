import { Photos } from '../../interfaces/Result.interface';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import { RandomResult } from '../../interfaces/randomResult';
import ImageCard from '../ImageCard/ImageCard';
import style from './ImageList.module.scss';

interface ImagesListProps {
  images: Photos[] | RandomResult[];
}

const ImagesList = ({ images }: ImagesListProps) => {
  const mapImageToMyPhotos = (image: Photos): MyPhoTos => {
    return {
      id: image.id,
      image: image.urls.small,
      width: image.width,
      height: image.height,
      likes: image.likes,
      alt_description: image.alt_description,
      created_at: image.created_at,
      description: image.description,
    };
  };
  return (
    <div className={style.images}>
      {images.map((image) => (
        <ImageCard key={image.id} image={mapImageToMyPhotos(image)} />
      ))}
    </div>
  );
};

export default ImagesList;
