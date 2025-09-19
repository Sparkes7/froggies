import "./Gallery.css";
import { useEffect, useState } from "react";

import Thumbnail from "./Thumbnail.jsx";
import LargeImage from "./LargeImage.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("pier");

  useEffect(() => {
    async function getImages() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Client-ID ${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`,
        },
      };
      const response = await fetch(
        import.meta.env.VITE_API_BASE + "?query=" + searchTerm,
        options
      );
      const data = await response.json();
      const wrangledData = data.results;
      setImages(wrangledData);
    }
    getImages();
  }, [searchTerm]);

  function handleClick(id) {
    setCurrentIndex(id);
  }

  // updating state with a function gives you the value before the state change as an argument.
  function nextImage() {
    setCurrentIndex((current) =>
      current + 1 < images.length ? current + 1 : 0
    );
  }

  function prevImage() {
    setCurrentIndex((current) =>
      current - 1 >= 0 ? current - 1 : images.length - 1
    );
  }

  const largeImage = images[currentIndex];
  let inputBox;

  return (
    <>
      <SearchBar
        handleChange={(element) => (inputBox = element.target.value)}
        search={() => setSearchTerm(inputBox)}
      />

      {largeImage && (
        <LargeImage
          url={largeImage.urls.regular}
          alt={largeImage.alt_description}
          title={largeImage.user.name}
          keyPress={(e) => console.log(e)}
          prevImage={() => prevImage()}
          nextImage={() => nextImage()}
        />
      )}

      <section className="thumbnails-section">
        <div className="thumbnails-container">
          {images.map((image) => {
            return (
              <Thumbnail
                key={image.id}
                url={image.urls.small}
                alt={image.alt_description}
                clickEvent={() => {
                  // changed from image.id when implemented Unsplash, as the IDs were not incremental numbers anymore, so had to return the index of the image in the array instead so that it works with my currentIndex state.
                  handleClick(images.indexOf(image));
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
