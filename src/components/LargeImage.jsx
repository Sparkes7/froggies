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
    <>
      <button className="button prev" onClick={prevImage}>
        Previous
      </button>
      <h2 className="title">{title}</h2>
      <img
        src={url}
        alt={alt}
        className="large-image"
        onKeyDown={keyPress}
        draggable="false"
      />
      <button className="button next" onClick={nextImage}>
        Next
      </button>
    </>
  );
}
