/* import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/basketSlice";

export default function CourseDetailsInfo({ course }) {
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <div dir="rtl" className="flex flex-col-reverse lg:flex-row justify-around">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-medium p-4">{course.title}</h1>
          <p className="p-4">{course.desc}</p>
          <div className="flex justify-between items-center">
            <button
              className="text-white bg-green-500 max-w-max p-3 rounded-full"
              onClick={() => dispatch(addItem(course))}
            >
              افزودن به سبد خرید
            </button>
            <span className="text-black text-xl pl-3 font-bold">
              {course.price} تومان
            </span>
          </div>
        </div>
        <img
          src={course.image}
          alt={course.title}
          className="rounded-lg md:w-[500px] md:h-72 w-52 h-28"
        />
      </div>
    </div>
  );
}
 */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/basketSlice";

export default function CourseDetailsInfo({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addItem(course));
    } else {
      navigate("/login"); // به صفحه لاگین بروید
    }
  };

  return (
    <div className="p-3">
      <div dir="rtl" className="flex flex-col-reverse lg:flex-row justify-around">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-medium p-4">{course.title}</h1>
          <p className="p-4">{course.desc}</p>
          <div className="flex justify-between items-center">
            <button
              className="text-white bg-green-500 max-w-max p-3 rounded-full"
              onClick={handleAddToBasket}
            >
              افزودن به سبد خرید
            </button>
            <span className="text-black text-xl pl-3 font-bold">
              {course.price} تومان
            </span>
          </div>
        </div>
        <img
          src={course.image}
          alt={course.title}
          className="rounded-lg md:w-[500px] md:h-72 w-52 h-28"
        />
      </div>
    </div>
  );
}
