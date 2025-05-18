import { createBrowserRouter } from "react-router";
import MainHomeLayout from "../layouts/MainHomeLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Users from "../pages/Users";
import SignIn from "../auth/SignIn";
// import SignOut from "../auth/SignOut";
import SignUp from "../auth/SignUp";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import UpdateCoffee from "../pages/UpdateCoffee";
import SingleCoffeeDetails from "../pages/SingleCoffeeDetails";

const router=createBrowserRouter([
    {
        path: '/',
        element: <MainHomeLayout></MainHomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch(`http://localhost:4000/coffees`),
                hydrateFallbackElement: <Loading></Loading>
            },
           {
            path: '/add-coffee',
            element: <AddCoffee></AddCoffee>
           },
           {
                path: '/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params})=>fetch(`http://localhost:4000/coffees/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
           },
           {
                path: '/details',
                element: <SingleCoffeeDetails></SingleCoffeeDetails>
           },
           {
            path: '/users',
            element: <Users></Users>
           },
           {
            path: '/signin',
            element: <SignIn></SignIn>
           },
           {
            path: '/signup',
            element: <SignUp></SignUp>
           },
           {
            path: '*',
            element: <ErrorPage></ErrorPage>
           }
        ]
    }
])
export default router;