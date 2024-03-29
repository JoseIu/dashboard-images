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

  const imagesSaved = useSelector((state: RooState) => state.myPhoto.myPhotos);
  const imageToEditId = useSelector((state: RooState) => state.myPhoto.selectedImage);

  console.log({ imagesSaved });

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem('savedImages') || '[]');

    if (!imagesFromStorage.length) return;
    dispatch(addImageFromStorage(imagesFromStorage));
    console.log({ imagesFromStorage });
  }, [dispatch]);

  useEffect(() => {
    if (!imageToEditId || imageToEditId === null) return;

    setIsEditing(true);
  }, [imageToEditId]);

  return (
    <section className={`${style.saved} wrapper`}>
      <h2>MyPhotosPage</h2>
      {isEditing ? (
        <EditForm id={imageToEditId} setIsEditing={setIsEditing} />
      ) : (
        <div className={style.filters}>
          <InputSearch placeholder="Search an image..." />

          <select name="select" id="selet" className={style.select}>
            <option value="0">Default</option>
            <option value="0">Default</option>
            <option value="0">Default</option>
            <option value="0">Default</option>
            <option value="0">Default</option>
          </select>

          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      )}
      <ImagesSavedList images={imagesSaved} isMyPhotosPage={true} />
    </section>
  );
};

export default MyPhotosPage;
