

import React from "react";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import LoginForm from "./pages/LoginForm";
import Basket from "./pages/Basket";
import CourseInfo from "./pages/CurseInfo";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const queryClient = new QueryClient(); 

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}> 
      {useRoutes([
        { path: "/login", element: <LoginForm /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/", element: <Home /> },
        { path: "basket", element: <Basket /> },
        { path: "course-info/:courseType", element: <CourseInfo /> },
        { path: "*", element: <Home /> },
      ])}
    </QueryClientProvider>
  );
};

export default AppRoutes;
