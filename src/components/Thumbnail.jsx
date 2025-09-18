import "./Thumbnail.css";

export default function Thumbnail({ url, alt, clickEvent }) {
  return (
    <>
      <button tabIndex={0} onClick={clickEvent} className="thumb-button">
        <img src={url} alt={alt} draggable="false" className="image" />
      </button>
    </>
  );
}
