import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBooks/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/bookCategory')
        },
        {
            path: "/addbooks",
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>,
        },
        {
            path: "/allbooks",
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        },
        {
            path: "/borrowedbooks",
            element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

export default router;