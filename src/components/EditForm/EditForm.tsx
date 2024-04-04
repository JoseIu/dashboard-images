import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RooState } from '../../app/store';
import { editImage, selectImageById } from '../../features/myPhotosSlice/myPhotosSlice';
import editFromStorage from '../../helpers/editFromStorage';
import style from './EditForm.module.scss';

interface EditFormProps {
  id: string | null;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm = ({ id, setIsEditing }: EditFormProps) => {
  const [edit, setEdit] = useState('');
  const { myPhotos } = useSelector((state: RooState) => state.myPhoto);

  const dispatch = useDispatch();

  const handleSyubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(editImage({ id, edit }));
    editFromStorage(id, edit);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    dispatch(selectImageById(null));
  };

  useEffect(() => {
    const imageDesctiption = myPhotos.find((image) => image.id === id);

    if (!imageDesctiption?.description) return;
    setEdit(imageDesctiption.description);
  }, [id, myPhotos]);
  return (
    <form className={style.edit} onSubmit={handleSyubmit}>
      <input
        className={style.edit__input}
        type="text"
        placeholder="edit"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <input className={style.edit__submit} type="submit" name="edit" id="edit" value="edit" />

      <button className={style.edit__close} type="button" onClick={handleCloseEdit}>
        X
      </button>
    </form>
  );
};

export default EditForm;
