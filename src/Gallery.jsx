import "./Gallery.css";
import { useEffect, useState } from "react";

import Thumbnail from "./Thumbnail.jsx";
import LargeImage from "./LargeImage.jsx";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function getImages() {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      const wrangledData = data;
      setImages(wrangledData);
    }
    getImages();
  }, []);

  function handleClick(id) {
    setCurrentIndex(id - 1);
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

  return (
    <>
      <section className="thumbnails-container">
        {images.map((image) => {
          return (
            <Thumbnail
              key={image.id}
              url={image.url}
              alt={image.alt}
              clickEvent={() => {
                handleClick(image.id);
              }}
            />
          );
        })}
      </section>

      <section className="large-image-container">
        {largeImage && (
          <LargeImage
            url={largeImage.url}
            alt={largeImage.alt}
            title={largeImage.title}
            prevImage={() => prevImage()}
            nextImage={() => nextImage()}
          />
        )}
      </section>
    </>
  );
}
