/* 

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/basketSlice";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function CourseInfoSceleton({ course }) {
  const dispatch = useDispatch();

  return (
    <div className="p-3">
      <div dir="rtl" className="flex   flex-col-reverse lg:flex-row justify-around">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-medium p-4">
            {course ? course.title : <Skeleton width={200} />}
          </h1>
          <p className="p-4">
            {course ? course.desc : <Skeleton count={3} />}
          </p>
          <div className="flex justify-between items-center">
            {course ? (
              <>
                <button
                  className="text-white bg-green-500 max-w-max p-3 rounded-full"
                  onClick={() => dispatch(addItem(course))}
                >
                  افزودن به سبد خرید
                </button>
                <span className="text-black text-xl pl-3 font-bold">
                  {course.price} تومان
                </span>
              </>
            ) : (
              <Skeleton width={150} height={40} />
            )}
          </div>
        </div>
        {course ? (
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg md:w-[500px] md:h-72 w-52 h-28"
          />
        ) : (
          <Skeleton width={200} height={150} />
        )}
      </div>
    </div>
  );
} */



/* import React from "react";

export default function CourseInfoSkeleton() {
  return (
    <div className="p-3">
      <div dir="rtl" className="flex flex-col-reverse lg:flex-row justify-around animate-pulse">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="h-10 bg-gray-300 rounded-full p-4 mb-4"></div>
          <div className="h-24 bg-gray-300 rounded-lg p-4 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-10 bg-gray-300 rounded-full p-3 w-40"></div>
            <div className="h-8 bg-gray-300 rounded-full p-3 w-24"></div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-300 md:w-[500px] md:h-72 w-52 h-28"></div>
      </div>
    </div>
  );
} */
  import React from "react";
  import Skeleton from "react-loading-skeleton";
  import "react-loading-skeleton/dist/skeleton.css";
  
  export default function CourseInfoSkeleton() {
    return (
      <div className="p-3">
        <div dir="rtl" className="flex flex-col-reverse lg:flex-row justify-around">
          <div className="flex flex-col w-full lg:w-1/2">
            <Skeleton  className="rounded-full h-10 mb-4" />
            <Skeleton  className="rounded-lg h-24 mb-4" />
            <div className="flex justify-between items-center">
              <Skeleton  className="rounded-full h-10 w-40" />
              <Skeleton  className="rounded-full h-8 w-24" />
            </div>
          </div>
          <Skeleton   className="rounded-lg w-52 h-28 md:w-[500px] md:h-72" />
        </div>
      </div>
    );
  }
  