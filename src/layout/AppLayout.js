import Navbar from "../component/Header/NavBar";
import { Outlet } from "react-router";
import useNetworkStatus from "../utils/customHooks/useNetworkStatus";
import UserContext from "../utils/userContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import HungryNomadFooter from '../component/Body/HungryNomadFooter'
const AppLayout = () => {
  const status = useNetworkStatus();

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    //after calling the api then get the response and update the state
    setUserName("akhilesh");
  }, []);

  return (
    <>  
      {status ? (
        <>
          <Provider store={appStore}>
            <UserContext.Provider value={{ name: userName, setUserName }}>
              <Navbar />

              <div className=" w-full flex flex-col items-center justify-center">
                <div className="w-full sm:w-2/3 px-3 sm:px-0">
                  <Outlet />
                </div>
                <HungryNomadFooter/>
              </div>
            </UserContext.Provider>
          </Provider>
        </>
      ) : (
        <p>no internet check your internet connection</p>
      )}
    </>
  );
};

export default AppLayout;
