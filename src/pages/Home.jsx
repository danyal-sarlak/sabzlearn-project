
import React from "react";

import Header from "../Components/Header";
import LastCourses from "../Components/LastCourses";
import PopularCourses from "../Components/PopularCourses";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-100">
     
      <Header />
      <LastCourses />
      <PopularCourses />
      <Footer  />
    </div>
  );
};

export default Home;

