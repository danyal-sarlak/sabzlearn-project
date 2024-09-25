import React from "react";

export default function CourseTitle({ title, desc, btnTitle }) {
  return <div dir="rtl">
    <div className="flex gap-x-2">
        <div className=" lg:w-8 lg:h-8 w-6 h-6 rounded-md bg-yellow-500"></div>
        <h2 className=" lg:text-3xl text-lg font-bold">{title}</h2>
    </div>
    <p className="text-gray-500 lg:text-lg text-sm font-medium">{desc}</p>
  </div>;
}
