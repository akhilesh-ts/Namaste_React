import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import ErrorPage from "../component/Body/ErrorPage";
// import RestaurantMenuList from "../component/Body/RestaurantMenuList";
import LoadingPage from '../page/LoadingPage'
import { lazy, Suspense } from "react";


const Contact = lazy(() => import("../page/Contact"));
const About = lazy(() => import("../page/About"));
const Home = lazy(() => import("../page/Home"));
const Cart = lazy(() => import("../page/Cart"));
const RestaurantMenuList=lazy(()=>import("../component/Body/RestaurantMenuList"))

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingPage/>}>
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingPage/>}>
            <About />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingPage/>}>
            <Contact />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/resmenu/:resname/:id",
        element: <Suspense fallback={<LoadingPage/>}>
          <RestaurantMenuList />
        </Suspense>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LoadingPage/>}>
            <Cart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default AppRouter;
