
import React, { createContext, useState, useEffect } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    
    return localStorage.getItem("selectedCategory") || "All";
  });

  useEffect(() => {
    // Save the selected category 
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <CourseContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CourseContext.Provider>
  );
};

