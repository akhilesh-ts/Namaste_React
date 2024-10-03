import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState(null);

  const location = useSelector((store) => store.location);

  const { resname, id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const data = await fetch(
      //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0357771&lng=76.3342614&restaurantId=${id}&&catalog_qa=undefined&submitAction=ENTER`
      // );

      // const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.latitude}&lng=${location.longitude}&restaurantId=${id}`)

     
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.latitude}&lng=${location.longitude}&restaurantId=${id}`);
      // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.latitude}&lng=${location.longitude}&restaurantId=${id}`);
      const json = await data.json();
      // console.log(json.data);
      

      setResMenuInfo(json);
    } catch (error) {
      console.log(error);
    }
  };

  return resMenuInfo;
};

export default useRestaurantMenu;
