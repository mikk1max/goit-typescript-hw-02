import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard = ({ alt, link, orientation }: ImageCardProps) => {
  return (
    <div className={`${s.imageCard} ${s[orientation]}`}>
      <img src={link} alt={alt} />
    </div>
  );
};

export default ImageCard;
