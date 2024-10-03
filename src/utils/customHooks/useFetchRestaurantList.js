import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchRestaurantList = () => {
  const location = useSelector((store) => store.location);
  const [resMenu, setResmenu] = useState(null);

  useEffect(() => {
    if(location.latitude&&location.longitude){
        fetchData(location.latitude, location.longitude);
    }
    
  },[location.latitude,location.longitude]);

  const fetchData = async (latitude, longitude) => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      // const data = await fetch(
      //   `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      // );

      const json = await data.json();
      setResmenu(json);
      
    } catch (error) {
      console.log(error);
    }
  };
  return resMenu;
};

export default useFetchRestaurantList;
