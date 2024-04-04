import food from "../assests/foodv.png";

export const Title = () => (
  <a href="">
    {" "}
    <img src={food} alt="" className="logo" />{" "}
  </a>
);

export const Header = () => {
  return (
    <div className="header">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
