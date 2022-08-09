import './Shop.css'

const Search = () => {
  return (
    <div className="row row-2">
      <h2 className="laundry-title">All Laundry Shops</h2>
      {/* <select>
      <option>Default Shorting</option>
      <option>Coin-Based</option>
      <option>Drop-Off and Wash</option>
      <option>Sort by price</option>
      <option>Sort by popularity</option>
      <option>Sort by rating</option>
      <option>Sort by sale</option>
  </select> */}

      <form className="search-form" action="#">
        <div className="search-field">
          <input
            type="search"
            placeholder="&#x1F50D; Search Laundry Shop"
            style={{ marginLeft: 15, height: 35, width: 350 }}
          />
          <button
            type="submit"
            style={{ height: 35, width: 50, marginLeft: 10 }}>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "blue" }}></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
