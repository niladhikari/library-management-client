import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBooks/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from './PrivateRoute';
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import ReadBook from "../Pages/ReadBook/ReadBook";
import Error from "../Pages/Error/Error";
import Contact from "../Components/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('https://library-management-server-three.vercel.app/bookCategory')
        },
        {   
            path: '/details/:id',
            element: <CategoryDetails></CategoryDetails>,
            loader: ({ params }) => fetch(`https://library-management-server-three.vercel.app/bookCategory/${params.id}`)
        },
        {   
            path: '/detailsData/:id',
            element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://library-management-server-three.vercel.app/books/${params.id}`)
        },
        {   
            path: '/read/:id',
            element: <PrivateRoute><ReadBook></ReadBook></PrivateRoute>,
            loader: ({ params }) => fetch(`https://library-management-server-three.vercel.app/books/${params.id}`)
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
            path: "/contact",
            element: <Contact></Contact>,
        },

        {   
            path: '/update/:id',
            element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
            loader: ({ params }) => fetch(`https://library-management-server-three.vercel.app/books/${params.id}`)
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