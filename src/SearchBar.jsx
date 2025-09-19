import "./SearchBar.css";

export default function SearchBar({ search, handleChange }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        aria-label="Search bar"
        placeholder="Search Photos"
        type="text"
        id="search-box"
        onChange={handleChange}
      />
      <button className="search-button" onClick={search}>
        Search
      </button>
    </div>
  );
}
