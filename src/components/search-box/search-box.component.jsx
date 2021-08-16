import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search"
      type="search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);
