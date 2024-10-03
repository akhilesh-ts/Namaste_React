import React from "react";
import { createRoot } from "react-dom/client";
import {RouterProvider} from 'react-router-dom'
import AppRouter from "./Routing/AppRoute";



const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);