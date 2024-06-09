import style from './EmptyPage.module.scss';

type EmptyPageProps = {
  isEmpty: boolean;
};
const EmptyPage = ({ isEmpty }: EmptyPageProps) => {
  const srcIamge = isEmpty ? 'empyPage.svg' : 'noResultsPage.svg';
  const textSpan = isEmpty ? 'this page is empty' : 'No results found';
  return (
    <div className={style.empty}>
      <img className={style.empty__img} src={srcIamge} alt="" />

      <span className={style.empty__title}> {textSpan} </span>
    </div>
  );
};

export default EmptyPage;
