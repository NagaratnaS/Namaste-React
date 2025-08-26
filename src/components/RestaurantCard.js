import { CDN_URL } from "../utils/constants";
// const styleCard = { backgroundColor: "#f0f0f0" };
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData.info;
  console.log("%%%%%%%%%resData%%%%%%%%%%%%", resData.info);
  return (
    <div className="w-xs">
      <img
        className="w-xs"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export const withLabelPromoted = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
