const styleCard = { backgroundColor: "#f0f0f0" };
const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const {
    name,
    servesCuisine,
    aggregateRating: { ratingValue, reviewCount },
    image,
  } = resData.item;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={image}></img>
      <h3>{name}</h3>
      <h4>{servesCuisine}</h4>
      <h4>{ratingValue}</h4>
      <h4>{reviewCount}</h4>
    </div>
  );
};

export default RestaurantCard;
