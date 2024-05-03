import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Price</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="less than $12">less than $12</option>
            <option value="$15 - $20">$15 - $20</option>
            <option value="above $20">above $20</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="rating">Rating</label>
          <select name="rating" id="rating">
            <option value="">any</option>
            <option value="4.0">4.0</option>
            <option value="4.1">4.1</option>
            <option value="4.2">4.2</option>
            <option value="4.3">4.3</option>
            <option value="4.4">4.4</option>
            <option value="4.5">4.5</option>
            <option value="4.6">4.6</option>
            <option value="4.7">4.7</option>
            <option value="4.8">4.8</option>
            <option value="4.9">4.9</option>
            <option value="5.0">5.0</option>
          </select>
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
