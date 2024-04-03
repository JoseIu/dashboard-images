import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../../app/store';
import EditForm from '../../components/EditForm/EditForm';
import ImagesSavedList from '../../components/ImagesSavedList/ImagesSavedList';
import MyPhotosFilers from '../../components/MyPhotosFilters/MyPhotosFilters';
import { addImageFromStorage } from '../../features/imagesSlice/myPhotosSlice';
import { MyPhoTos } from '../../interfaces/myPhotos.interface';
import style from './MyPhotosPage.module.scss';

const MyPhotosPage = () => {
  const { myPhotos } = useSelector((state: RooState) => state.myPhoto);

  console.log({ myPhotos });
  const [photos, setPhotos] = useState(myPhotos);

  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const { selectedImage } = useSelector((state: RooState) => state.myPhoto);

  const { filters, setSearchByDescription, setSort, setSearchByTag } = useFilters();

  let photosFiltered = searchByDescription(photos, filters.searchByDescription);

  photosFiltered = sortyBy(photosFiltered, filters.sort);

  useEffect(() => {
    const imagesFromStorage = JSON.parse(localStorage.getItem('savedImages') || '[]');

    if (!imagesFromStorage.length) return;
    dispatch(addImageFromStorage(imagesFromStorage));
    setPhotos(imagesFromStorage);
  }, [dispatch]);

  useEffect(() => {
    if (!selectedImage || selectedImage === null) return;

    setIsEditing(true);
    setPhotos(myPhotos);
  }, [selectedImage, myPhotos]);

  return (
    <section className={`${style.saved} wrapper`}>
      <h2 className={style.saved__title}>MyPhotosPage</h2>
      {isEditing ? (
        <EditForm id={selectedImage} setIsEditing={setIsEditing} />
      ) : (
        <MyPhotosFilers
          search={filters.searchByDescription}
          setSearchByDescription={setSearchByDescription}
          sort={filters.sort}
          setSort={setSort}
          setSearchByTag={setSearchByTag}
        />
      )}
      <ImagesSavedList images={photosFiltered} isMyPhotosPage={true} />
    </section>
  );
};

const useFilters = () => {
  const [filters, setFilters] = useState({
    searchByDescription: '',
    sort: 0,
    searchByTag: '',
  });

  const setSearchByDescription = (search: string) => setFilters({ ...filters, searchByDescription: search });
  const setSort = (sort: number) => setFilters({ ...filters, sort });
  const setSearchByTag = (search: string) => setFilters({ ...filters, searchByTag: search });

  return {
    filters,
    setSearchByDescription,
    setSort,
    setSearchByTag,
  };
};

const searchByDescription = (images: MyPhoTos[], search: string) => {
  if (!search) return images;
  const noramlizedSearch = search.toLowerCase();
  const imagesFiltered = images.filter((image) =>
    image.description?.toLowerCase().includes(noramlizedSearch),
  );
  console.log(imagesFiltered);

  return imagesFiltered;
};

const sortyBy = (images: MyPhoTos[], sort: number) => {
  const imagesToSort = [...images];

  switch (sort) {
    case 1:
      return imagesToSort.sort((a, b) => {
        if (a.created_at! > b.created_at!) return -1;
        if (a.created_at! < b.created_at!) return 1;
        return 0;
      });
    case 2:
      return imagesToSort.sort((a, b) => b.width! - a.width!);
    case 3:
      return imagesToSort.sort((a, b) => b.height! - a.height!);
    case 4:
      return imagesToSort.sort((a, b) => b.likes! - a.likes!);
    default:
      return images;
  }
};

export default MyPhotosPage;
