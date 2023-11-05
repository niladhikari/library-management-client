import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBooks/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/addbooks",
            element: <AddBook></AddBook>,
        },
        {
            path: "/allbooks",
            element: <AllBooks></AllBooks>,
        },
        {
            path: "/borrowedbooks",
            element: <BorrowedBooks></BorrowedBooks>,
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