import { useState } from "react";
import "./searchBar.scss";

const types = ["Restaurants"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Restaurants",
    location: "",
    calorie: 0,
    rating: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="price"
          min={0}
          max={10000}
          placeholder="Price"
        />
        <input
          type="number"
          name="rating"
          min={4.0}
          max={5.0}
          step={0.1}
          placeholder="Rating"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
