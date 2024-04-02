import style from './ImageCardDescription.module.scss';

interface ImageCardDescriptionProps {
  isMyPhotosPage: boolean;
  width?: number;
  height?: number;
  likes?: number;
  description?: string | null;
  created_at?: string;
}

const ImafeCardDescription = ({
  isMyPhotosPage,
  width,
  height,
  created_at,
  likes,
  description,
}: ImageCardDescriptionProps) => {
  return (
    <>
      {isMyPhotosPage && (
        <div className={style.info}>
          <div className={style.info__row}>
            <span className={style.info__span}>
              Width: <span className={style.info__data}>{width}</span>{' '}
            </span>
            <span className={style.info__span}>
              Height: <span className={style.info__data}>{height}</span>{' '}
            </span>
          </div>
          <div className={style.info__row}>
            <span className={style.info__span}>
              Added: <span className={style.info__data}>{created_at?.split('T')[0]}</span>{' '}
            </span>
            <span className={style.info__span}>
              Likes: <span className={style.info__data}>{likes}</span>{' '}
            </span>
          </div>

          <p>{description ? description : 'No description...'}</p>
        </div>
      )}
    </>
  );
};

export default ImafeCardDescription;
