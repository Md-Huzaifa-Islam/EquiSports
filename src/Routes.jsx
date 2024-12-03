import { createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllEquipments from "./Components/AllEquipments";
import AddEquipment from "./Components/AddEquipment";
import Detail from "./Components/Detail";
import MyEquipments from "./Components/MyEquipments";
import UpdateEquipment from "./Components/UpdateEquipment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allequipments",
        element: <AllEquipments></AllEquipments>,
      },
      {
        path: "/addequipments",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/detail/:id",
        element: <Detail></Detail>,
      },
      {
        path: "/myequipments",
        element: <MyEquipments></MyEquipments>,
      },
      {
        path: "/update/:id",
        element: <UpdateEquipment></UpdateEquipment>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
