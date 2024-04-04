const RestaurantCard = ({ name, email, collage, image }) => {
  const dimg =
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
  return (
    <div className="card">
      <h3>{name}</h3>
      <h5>{email}</h5>
      <h5>{collage}</h5>
      <img src={image ? image : dimg} alt="Sorry " />
    </div>
  );
};
export default RestaurantCard;
