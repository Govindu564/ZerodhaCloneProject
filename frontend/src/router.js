import React ,{useEffect} from "react";
import {useNavigate,useRoutes} from "react-router-dom";

//pages List
import SignupPage from "./landing_page/signup/Signup";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "../src/landing_page/about/AboutPage";
import ProductPage from "../src/landing_page/products/ProductPage";
import PricingPage from "../src/landing_page/pricing/PricingPage";
// import SupportPage from "../src/landing_page/support/SupportPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "../src/landing_page/NotFound";


import { useAuth } from "./authContext";


const ProjectRoutes = ()=>{
    const {currentUser , setCurrentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const userIdfromStorage = localStorage.getItem("userId");
        if(userIdfromStorage && !currentUser){
            setCurrentUser(userIdfromStorage);
        } 

        if(!userIdfromStorage && !["/auth","/signup"].includes(window.location.pathname)){
            navigate("/auth");
        }

        if(userIdfromStorage && window.location.pathname=="/auth"){
            navigate("/");
        }
    },[currentUser,navigate,setCurrentUser]);

    let element = useRoutes([
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/signup",
            element:<SignupPage/>
        },
        {
            path:"/about",
            element:<AboutPage/>
        },
        {
            path:"/product",
            element:<ProductPage/>
        },
        {
            path:"/pricing",
            element:<PricingPage/>
        }, 
        {
            path:"/support",
            element:<SupportPage/>
        },
        {
            path:"/*",
            element:<NotFound/>
        },

    ]);
    return element;
}

export default ProjectRoutes;