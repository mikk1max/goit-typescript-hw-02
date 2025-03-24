import { Image } from "../../utils/interfaces";

export type ImageModalProps = {
  isOpen: boolean;
  selectedImage: Image;
  closeModal: () => void;
};
