import { MyPhoTos } from '../interfaces/myPhotos.interface';

export const searchByDescription = (images: MyPhoTos[], search: string) => {
  if (!search) return images;
  const noramlizedSearch = search.toLowerCase();
  const imagesFiltered = images.filter((image) =>
    image.description?.toLowerCase().includes(noramlizedSearch),
  );

  return imagesFiltered;
};

export const sortyBy = (images: MyPhoTos[], sort: number) => {
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
