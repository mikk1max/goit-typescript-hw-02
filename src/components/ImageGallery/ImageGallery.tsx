import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <>
      <ul className={s.gallery}>
        {images.map((image) => {
          const orientation =
            image.width > image.height ? "horizontal" : "vertical";

          return (
            <li
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <ImageCard
                alt={image.alt_description}
                link={image.urls.small}
                orientation={orientation}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
