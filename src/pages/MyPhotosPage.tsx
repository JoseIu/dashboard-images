import { useSelector } from 'react-redux';
import { RooState } from '../app/store';
import ImagesSavedList from '../components/ImagesSavedList/ImagesSavedList';

const MyPhotosPage = () => {
  const imagesSaved = useSelector((state: RooState) => state.myPhoto);
  // console.log(imagesSaved);

  return (
    <div>
      MyPhotosPage
      <ImagesSavedList images={imagesSaved} isMyPhotosPage={true} />
    </div>
  );
};

export default MyPhotosPage;
