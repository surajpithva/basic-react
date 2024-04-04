import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// 1.51.12
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    // console.log(data[1]);

    // setAllRestaurants(data);
    setFilteredRestaurants(data);
  }

  // if allRestaurants is empty don't render restaurants cards
  // if (!allRestaurants) return null;

  return (
    <>
      {/* <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div> */}

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          // console.log(restaurant.name);
          // <h5>{email}</h5>
          return (
            <RestaurantCard
              name={restaurant.name}
              email={restaurant.email}
              collage={restaurant.collage}
              image={restaurant.image}
              key={restaurant.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
