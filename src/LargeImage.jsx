import "./LargeImage.css";

export default function LargeImage({
  title,
  url,
  alt,
  keyPress,
  prevImage,
  nextImage,
}) {
  return (
    <section className="large-image-container">
      <h2 className="title">Photographer: {title}</h2>
      <img
        className="large-image"
        src={url}
        alt={alt}
        onKeyDown={keyPress}
        draggable="false"
      />

      <button
        className="button prev"
        onClick={prevImage}
        aria-label="previous image"
      >
        Prev
      </button>
      <button
        className="button next"
        onClick={nextImage}
        aria-label="next image"
      >
        Next
      </button>
    </section>
  );
}
