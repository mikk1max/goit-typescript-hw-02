import { Image } from "../../utils/interfaces";

export type ImageGalleryProps = {
  images: Array<Image>;
  openModal: (image: Image) => void;
};
