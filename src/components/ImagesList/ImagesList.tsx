import { useSelector } from 'react-redux';
import { RooState } from '../../app/store';

import style from './ImageList.module.scss';

const ImagesList = () => {
  const imagesList = useSelector((state: RooState) => state.images);

  console.log(imagesList);
  return (
    <div className={style.images}>
      {imagesList.map((image) => (
        <article key={image.id} className={style.card}>
          <img className={style.card__img} src={image.urls.small} alt={image.alt_description} />
          <button className={style.card__right}>ADD</button>
          <button className={style.card__bottom}>DOW</button>
          <button className={style.card__left}>EDIT</button>

          <div></div>
        </article>
      ))}
    </div>
  );
};

export default ImagesList;
