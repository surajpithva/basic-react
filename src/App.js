import "./style.css";
import food from "./assests/foodv.png";
import burger from "./assests/burger.png";

const Title = () => (
  <a href="">
    {" "}
    <img src={food} alt="" className="logo" />{" "}
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
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

const burgerking = {
  img: { burger },
  name: "burger king",
  cusines: ["burger", "american"],
  rating: "4.2",
};

//
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerking.img} alt="" />
      <h2>{burgerking.name}</h2>
      <h3>{burgerking.cusines.join(", ")}</h3>
      <h4>{burgerking.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return <RestrauntCard />;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;
