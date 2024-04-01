import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../app/store';
import EditForm from '../components/EditForm/EditForm';
import ImagesSavedList from '../components/ImagesSavedList/ImagesSavedList';
import InputSearch from '../components/InputSearch/InputSearch';
import { addImageFromStorage } from '../features/imagesSlice/myPhotosSlice';
import style from './MyPhotosPage.module.scss';

const MyPhotosPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const { myPhotos } = useSelector((state: RooState) => state.myPhoto);
  const { selectedImage } = useSelector((state: RooState) => state.myPhoto);

  console.log({ imagesSaved: myPhotos });

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem('savedImages') || '[]');

    if (!imagesFromStorage.length) return;
    dispatch(addImageFromStorage(imagesFromStorage));
    console.log({ imagesFromStorage });
  }, [dispatch]);

  useEffect(() => {
    if (!selectedImage || selectedImage === null) return;

    setIsEditing(true);
  }, [selectedImage]);

  return (
    <section className={`${style.saved} wrapper`}>
      <h2 className={style.saved__title}>MyPhotosPage</h2>
      {isEditing ? (
        <EditForm id={selectedImage} setIsEditing={setIsEditing} />
      ) : (
        <div className={style.filters}>
          <InputSearch className={style.filters__search} placeholder="Search an image..." />

          <select className={style.filters__select} name="select" id="selet">
            <option className={style.filters__option} value="0">
              Default
            </option>
            <option className={style.filters__option} value="1">
              Import date
            </option>
            <option className={style.filters__option} value="2">
              Width
            </option>
            <option className={style.filters__option} value="3">
              Height
            </option>
            <option className={style.filters__option} value="4">
              Likes
            </option>
          </select>
        </div>
      )}
      <ImagesSavedList images={myPhotos} isMyPhotosPage={true} />
    </section>
  );
};

export default MyPhotosPage;
