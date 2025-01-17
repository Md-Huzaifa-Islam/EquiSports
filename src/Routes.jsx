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
import PrivateRoute from "./Providers/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://equipment-store-huzaifa.vercel.app/reviews"),
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
        loader: () =>
          fetch("https://equipment-store-huzaifa.vercel.app/equipments/"),
      },
      {
        path: "/addequipments",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <Detail></Detail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equipment-store-huzaifa.vercel.app/equipments/${params.id}`,
          ),
      },
      {
        path: "/myequipments",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equipment-store-huzaifa.vercel.app/equipments/${params.id}`,
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
