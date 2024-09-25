
/* import React, { useEffect, useState, useContext } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import supabase from "../supabase";
import { SearchContext } from "../Contexts/SearchContext";
import { CourseContext } from "../Contexts/CourseContext";
import { useNavigate } from "react-router-dom";

export default function CourseBox() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(SearchContext);
  const { selectedCategory, setSelectedCategory } = useContext(CourseContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setSelectedCategory('All');
    }
  }, [searchTerm, setSelectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);

      try {
        let query = supabase
          .from('sabzlearn-course')
          .select('*');

        if (selectedCategory && selectedCategory !== 'All') {
          query = query.ilike('category', `%${selectedCategory}%`);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setCourses(data);
      } catch (err) {
        setError(err.messag);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (courseType) => {
    if (isAuthenticated) {
      navigate(`/course-info/${courseType}`);
    } else {
      navigate("/login");
    }
  };


  if (error) return <p>خطا: {error}</p>;

  return (
    <div dir="rtl" className="w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          filteredCourses.map(course => (
            <div
              key={course.id}
              className="flex bg-white flex-col border border-neutral-100 cursor-pointer rounded-lg shadow-sm"
              onClick={() => handleCourseClick(course.type)}
            >
              <img src={course.image} className="rounded-lg" alt={course.title} />
              <h2 className="font-semibold px-2 text-sm lg:text-lg py-4 h-16">{course.title}</h2>
              <p className="py-4 text-xs lg:text-base px-2 text-gray-500 h-16 overflow-hidden ">
                {course.desc}
              </p>
              <div className="pb-3 px-3">
                <div className="flex py-4 justify-between pb-4 border-b-2 border-slate-300 px-1">
                  <div className="flex items-center text-gray-500">
                    <CiUser className="w-4 h-4 md:w-5 md:h-5 " />
                    <span className="text-xs lg:text-base">{course.teacher}</span>
                  </div>
                  <div className="flex text-yellow-400 items-center">
                    <span>5.0</span>
                    <MdOutlineStar />
                  </div>
                </div>

                <div className="flex items-end justify-between mt-2">
                  <span className="  flex text-slate-500 gap-1 text-xs lg:text-sm items-center">
                    <LuUsers2 className="w-5 h-5" />
                    {course.viewer}
                  </span>

                  <div className="flex flex-col ">
                    <span className="text-xs  lg:text-sm text-slate-500 line-through mb-1">{course.oldprice} تومان</span>
                    <span className="text-green-500  text-xs lg:text-sm font-medium">
                      {course.price} تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
 */
import React, { useEffect, useState, useContext } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import supabase from "../supabase";
import { SearchContext } from "../Contexts/SearchContext";
import { CourseContext } from "../Contexts/CourseContext";
import { useNavigate } from "react-router-dom";

export default function CourseBox() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(SearchContext);
  const { selectedCategory, setSelectedCategory } = useContext(CourseContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setSelectedCategory('All');
    }
  }, [searchTerm, setSelectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);

      try {
        let query = supabase
          .from('sabzlearn-course')
          .select('*');

        if (selectedCategory && selectedCategory !== 'All') {
          query = query.ilike('category', `%${selectedCategory}%`);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (courseType) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`/course-info/${courseType}`);
    } else {
      navigate("/login");
    }
  };

  if (error) return <p>خطا: {error}</p>;

  return (
    <div dir="rtl" className="w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          filteredCourses.map(course => (
            <div
              key={course.id}
              className="flex bg-white flex-col border border-neutral-100 cursor-pointer rounded-lg shadow-sm"
              onClick={() => handleCourseClick(course.type)}
            >
              <img src={course.image} className="rounded-lg" alt={course.title} />
              <h2 className="font-semibold px-2 text-sm lg:text-lg py-4 h-16">{course.title}</h2>
              <p className="py-4 text-xs lg:text-base px-2 text-gray-500 h-16 overflow-hidden">
                {course.desc}
              </p>
              <div className="pb-3 px-3">
                <div className="flex py-4 justify-between pb-4 border-b-2 border-slate-300 px-1">
                  <div className="flex items-center text-gray-500">
                    <CiUser className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs lg:text-base">{course.teacher}</span>
                  </div>
                  <div className="flex text-yellow-400 items-center">
                    <span>5.0</span>
                    <MdOutlineStar />
                  </div>
                </div>

                <div className="flex items-end justify-between mt-2">
                  <span className="flex text-slate-500 gap-1 text-xs lg:text-sm items-center">
                    <LuUsers2 className="w-5 h-5" />
                    {course.viewer}
                  </span>

                  <div className="flex flex-col">
                    <span className="text-xs lg:text-sm text-slate-500 line-through mb-1">{course.oldprice} تومان</span>
                    <span className="text-green-500 text-xs lg:text-sm font-medium">
                      {course.price} تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
