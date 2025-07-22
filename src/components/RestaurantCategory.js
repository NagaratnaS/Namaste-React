const RestaurantCategory = ({ data }) => {
  console.log("RestaurantCategory data:", data);
  return (
    <div>
      <span>
        {data?.title} {data?.itemCards?.length}{" "}
      </span>
      <span>⬇️</span>
    </div>
  );
};

export default RestaurantCategory;
