import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import ErrorPage from "../component/Body/ErrorPage";
// import RestaurantMenuList from "../component/Body/RestaurantMenuList";
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
          <Suspense fallback={<h1>loading...</h1>}>
            <Home />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading ...</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/resmenu/:resname/:id",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <RestaurantMenuList />
        </Suspense>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default AppRouter;
