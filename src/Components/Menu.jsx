/* import React from "react";
import { NavLink } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { HiX } from "react-icons/hi";

export default function Menu({
  searchTerm,
  handleSearch,
  toggleMenu,
  handleCategoryChange,
}) {
  return (
    <div className="fixed top-0 right-0 w-full h-full  bg-white z-50 p-5 shadow-lg">
      <div className="flex justify-end">
        <HiX className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
      </div>
      <div className="relative flex items-center mt-4">
        <input
          type="text"
          className="p-4 bg-slate-200 text-gray-500 pr-10 rounded-3xl w-full"
          placeholder="   "
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute left-3">
          <SlMagnifier />
        </div>
      </div>
      <ul className="hidden lg:flex gap-4">
  <li>
    <NavLink
      to="/"
      onClick={() => handleCategoryChange("")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      صفحه اصلی
    </NavLink>
  </li>
  <li className="flex items-center">
    <NavLink
      to="/front"
      onClick={() => handleCategoryChange("front")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      فرانت اند
    </NavLink>
  </li>
  <li className="flex items-center">
    <NavLink
      to="/bakend"
      onClick={() => handleCategoryChange("bakend")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      بکند
    </NavLink>
  </li>
  <li className="flex items-center">
    <NavLink
      to="/security"
      onClick={() => handleCategoryChange("security")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      امنیت
    </NavLink>
  </li>
  <li className="flex items-center">
    <NavLink
      to="/all"
      onClick={() => handleCategoryChange("")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      همه دوره‌ها
    </NavLink>
  </li>
</ul>
    </div>
  );
}
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { HiX } from "react-icons/hi";

export default function Menu({
  searchTerm,
  handleSearch,
  toggleMenu,
  handleCategoryChange,
}) {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-white z-50 p-5 shadow-lg">
      <div className="flex justify-end">
        <HiX className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
      </div>
      <div className="relative flex items-center mt-4">
        <input
          type="text"
          className="p-4 bg-slate-200 text-gray-500 pr-10 rounded-3xl w-full"
          placeholder="جستجو کنید"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute left-3">
          <SlMagnifier />
        </div>
      </div>
      <ul className="flex flex-col lg:flex-row gap-4 mt-8">
        <li>
          <NavLink
            to="/"
            onClick={() => handleCategoryChange("")}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/front"
            onClick={() => handleCategoryChange("front")}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            فرانت اند
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bakend"
            onClick={() => handleCategoryChange("bakend")}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            بکند
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/security"
            onClick={() => handleCategoryChange("security")}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            امنیت
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/python"
            onClick={() => handleCategoryChange("python")}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            پایتون
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
