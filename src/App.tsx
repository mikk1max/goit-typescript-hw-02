import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImagesWithTags } from "./utils/fetchFunc";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./utils/interfaces";

function App() {
  const [images, setImages] = useState<Array<Image>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [allPages, setAllPages] = useState(0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImagesWithTags(searchQuery, page);

        setAllPages(data.total_pages || 1);

        if (data.results.length === 0) {
          setIsError(true);
          toast.error("No data found!");
          return;
        }

        if (allPages === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch {
        setIsError(true);
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) fetchImages();
  }, [searchQuery, page, allPages]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const handleSearch = async (inputValue: string) => {
    setSearchQuery(inputValue);

    if (inputValue === "") {
      setIsError(true);
      toast.error("Please write something to find!");
    }

    setImages([]);
    setPage(1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    console.log(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {!isError ? (
        <ImageGallery images={images} openModal={openModal} />
      ) : (
        <ErrorMessage />
      )}
      {!isError && allPages > page && <LoadMoreBtn loadNextPage={setPage} />}
      {isLoading && <Loader />}
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </>
  );
}

export default App;
