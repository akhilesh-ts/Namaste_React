import { PiShoppingCartLight } from "react-icons/pi";
import { CgDarkMode } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "./MobilNav";
import { useEffect, useState } from "react";
import { NavData } from "../../utils/NavData";
import { GEOCODING_API, GEOCODING_API_KEY } from "../../utils/constants";
import logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../utils/slice/locationSlice";

const Navbar = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [town, setTown] = useState("");
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position?.coords?.latitude;
      const lon = position?.coords?.longitude;
      // dispatch(setLocation(lat,lon))

      setLatitude(lat);
      setLongitude(lon);
      getUserData(lat, lon);
      sendLocationToStore(lat, lon);
    });
  }, []);

  const sendLocationToStore = (latitude, longitude) => {
    dispatch(setLocation({latitude, longitude}));
  };
  const getUserData = async (longitude, latitude) => {
    const api = `${GEOCODING_API}key=${GEOCODING_API_KEY}&q=${longitude}%2C+${latitude}&pretty=1&no_annotations=1`;

    const response = await fetch(api);

    const data = await response.json();
    if (data?.results?.length > 0) {
      setTown(data?.results[0]?.components?.county);
    } else {
      setTown("");
    }
  };

  return (
    <>
      <div className="w-full  md:px-0 px-3 py-5 bg-white shadow-xl flex items-center justify-center sticky top-0 z-50 ">
        <nav className="w-full md:w-2/3 flex items-center justify-between">
          <div className="flex  items-center text-lg  gap-3 md:gap-4">
            <div>
              {/* <VscSquirrel className="text-orange-700 text-lg" /> */}
              <img
                src={logo}
                alt="Hungry Nomad"
                className=" w-8 h-8 md:w-12 md:h-12 cursor-pointer  "
              />
            </div>

            <div className=" hover:text-orange-800 text-orange-600 transition-colors ease-in duration-200 cursor-pointer  ">
              {town}
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="text-lg flex gap-7">
              {NavData.map((item) => (
                <li
                  className="hover:text-orange-600 font-light transition-colors ease-in duration-200 cursor-pointer  "
                  key={item.id}
                >
                  <Link to={item.path}> {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-lg flex items-center gap-6">
            <CgDarkMode className="  hover:text-orange-600 transition-colors font-light ease-in duration-200 cursor-pointer hidden lg:block" />
            {/* <Link to='/cart'><PiShoppingCartLight className="hover:text-orange-600 font-light transition-colors ease-in duration-200 cursor-pointer" /></Link> */}
            <Link to="/cart">
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg  focus:ring-4 focus:outline-none bg-orange-400"
              >
                <PiShoppingCartLight className=" text-white  cursor-pointer" />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-medium  bg-slate-300 border-1 border-white rounded-full -top-2 -end-2 ">
                  {cartItems.length}
                </div>
              </button>
            </Link>

            <button
              onClick={() => setIsLogin((prev) => !prev)}
              className="hidden lg:block font-light bg-orange-400 text-white py-1.5 px-4 rounded-lg"
            >
              {isLogin ? "Logout" : "Login"}
            </button>

            {isOpenMobileNav ? (
              <RxCross2 onClick={() => setIsOpenMobileNav((prev) => !prev)} />
            ) : (
              <RiMenu3Fill
                onClick={() => setIsOpenMobileNav((prev) => !prev)}
                className="lg:hidden"
              />
            )}
          </div>
        </nav>
      </div>
      {isOpenMobileNav && <MobileNav openState={setIsOpenMobileNav} />}
    </>
  );
};

export default Navbar;
