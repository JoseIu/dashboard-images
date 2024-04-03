import style from './EmptyPage.module.scss';
const EmptyPage = () => {
  return (
    <div className={style.empty}>
      <img className={style.empty__img} src="empyPage.svg" alt="" />

      <span className={style.empty__title}> this page is empty </span>
    </div>
  );
};

export default EmptyPage;
