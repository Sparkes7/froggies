import "./SearchBar.css";

export default function SearchBar({ search, handleChange }) {
  return (
    <div className="search-container">
      <label htmlFor="search-box">Search: </label>
      <input type="text" id="search-box" onChange={handleChange} />
      <button onClick={search}>Go</button>
    </div>
  );
}
