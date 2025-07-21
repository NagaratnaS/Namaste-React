import { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      `${RESTAURANT_LIST_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantmenu;
