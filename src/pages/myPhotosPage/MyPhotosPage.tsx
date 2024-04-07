import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RooState } from '../../app/store';
import EditForm from '../../components/EditForm/EditForm';
import ImagesSavedList from '../../components/ImagesSavedList/ImagesSavedList';
import MyPhotosFilers from '../../components/MyPhotosFilters/MyPhotosFilters';
import { addImageFromStorage } from '../../features/myPhotosSlice/myPhotosSlice';
import { searchByDescription, sortyBy } from '../../helpers/imagesFilters';
import { useFilters } from '../../hooks/useFilters';
import style from './MyPhotosPage.module.scss';

const MyPhotosPage = () => {
  const { myPhotos } = useSelector((state: RooState) => state.myPhoto);

  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const { selectedImage } = useSelector((state: RooState) => state.myPhoto);

  const { filters, setSearchByDescription, setSort } = useFilters();

  let photosFiltered = searchByDescription(myPhotos, filters.searchByDescription);

  photosFiltered = sortyBy(photosFiltered, filters.sort);

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem('savedImages') || '[]');

    if (!imagesFromStorage.length) return;
    dispatch(addImageFromStorage(imagesFromStorage));
  }, [dispatch]);

  useEffect(() => {
    if (!selectedImage || selectedImage === null) return;

    setIsEditing(true);
  }, [selectedImage, myPhotos]);

  return (
    <section className={`${style.saved} wrapper`}>
      <h2 className={style.saved__title}>MyPhotosPage</h2>

      <MyPhotosFilers
        search={filters.searchByDescription}
        setSearchByDescription={setSearchByDescription}
        sort={filters.sort}
        setSort={setSort}
      />
      <EditForm isEditing={isEditing} id={selectedImage} setIsEditing={setIsEditing} />

      <ImagesSavedList images={photosFiltered} isMyPhotosPage={true} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default MyPhotosPage;
