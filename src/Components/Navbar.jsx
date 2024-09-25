
import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { HiMenu } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { basketState, removeItem } from "../redux/basketSlice";
import supabase from "../supabase";
import Menu from "./Menu";
import { SearchContext } from "../Contexts/SearchContext";
import { CourseContext } from "../Contexts/CourseContext";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Navbar() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { setSelectedCategory } = useContext(CourseContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basketItems = useSelector(basketState).items;
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (storedToken) {
      (async () => {
        const { data, error } = await supabase
          .from("sabzlearn-users")
          .select("username")
          .eq("token", storedToken)
          .single();

        if (error) {
          console.error("Error:", error.message);
          return;
        }

        if (data) {
          setUserName(data.username);
        }
      })();
    }

    // بازیابی کتگوری انتخاب شده از localStorage
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleCart = () => {
    if (!token) {
      navigate("/login");
    } else {
      setIsCartOpen(!isCartOpen);
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserName("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalAmount = basketItems.reduce(
    (total, item) =>
      total +
      Number(
        item.price
          .toString()
          .replace(/,/g, "")
          .replace(/[^\d.-]/g, "")
      ) *
        item.quantity,
    0
  );

  const formattedTotalAmount = totalAmount.toLocaleString();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category); // ذخیره کتگوری انتخاب شده در localStorage
    navigate(`/${category}`);
  };

  return (
    <div
      dir="rtl"
      className="flex justify-between bg-white w-full h-[90px] items-center p-5"
    >
      <div className="lg:hidden">
        <HiMenu className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
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
      to="/python"
      onClick={() => handleCategoryChange("python")}
      className={({ isActive }) => (isActive ? "text-green-500" : "")}
    >
      پایتون 
    </NavLink>
  </li>
</ul>


      <div className="flex gap-5 items-center justify-end w-full lg:w-auto lg:justify-end">
        <div className="relative hidden lg:flex items-center rounded-3xl">
          <input
            type="text"
            className="p-4 bg-slate-200 text-gray-500 pr-10 rounded-3xl"
            placeholder="چیو میخوای یاد بگیری"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute left-3">
            <SlMagnifier />
          </div>
        </div>
        <div className="relative flex lg:ml-auto lg:mr-0">
          <div
            className="bg-slate-200 p-2 rounded-md cursor-pointer"
            onClick={() => {
              toggleCart();
              setIsProfileOpen(false)
            }}
            
          >
            <MdLocalGroceryStore className="w-6 h-6" />
          </div>

          {isCartOpen && (
            <div className="absolute top-full flex flex-col items-start lg:left-1/2 left-1/3 transform -translate-x-1/2 mt-2 bg-gray-100  shadow-lg rounded-md w-64  lg:w-80 p-4 z-10">
              {basketItems.length === 0 ? (
                <p>سبد خرید شما خالی است.</p>
              ) : (
                
                <div className="flex flex-col overflow-y-scroll lg:overflow-y-hidden h-32 lg:h-fit border-b-2 gap-y-3 space-x-4">
                  <h2 className="text-blue-400 font-bold">سبد خرید من</h2>
                  {basketItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center py-1 gap-x-2"
                    >
                      <img src={item.image} className="w-12 h-12" alt="" />
                      <div className="flex flex-col">
                        <p>{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {item.price} تومان
                        </p>
                      </div>
                      <div>
                        <FaRegTrashCan
                          className="text-red-500 cursor-pointer"
                          onClick={() => handleRemoveItem(item)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex py-3 gap-x-5">
                <p>مبلغ قابل پرداخت:</p>
                <p>{formattedTotalAmount} تومان</p>
              </div>

              <button
                className="bg-green-500 text-white rounded-full w-full p-3 mt-4"
                onClick={() => {
                  navigate("/basket");
                  toggleCart();
                
                 
                }}
                
              >
                مشاهده سبد خرید
              </button>
            </div>
          )}
        </div>

        {userName ? (
          <div className="relative flex lg:ml-auto lg:mr-0">
            <div
              className="bg-blue-500 flex items-center justify-center gap-x-1 px-3 py-4 w-[150px] text-white rounded-full cursor-pointer"
              onClick={() => {
              toggleProfile()
              setIsCartOpen(false)
              
               
              }}
            >
              <CiUser className="w-6 h-6" />
              <span>پروفایل</span>
            </div>
            {isProfileOpen && (
              <div className="absolute top-full flex flex-col items-start left-1/2 transform -translate-x-1/2 mt-2 bg-gray-100 shadow-lg rounded-md w-40 p-4 z-10">
                <button className="w-full text-left p-2 hover:bg-gray-200 rounded-md">
                  <span>{userName}</span>
                </button>
                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded-md"
                  onClick={handleLogout}
                >
                  خروج
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-blue-500 flex items-center justify-center px-3 py-4 w-[150px] text-white rounded-full cursor-pointer"
            onClick={() => navigate("/login")}
          >
            ورود | عضویت
          </button>
        )}
      </div>

      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden  z-50`}
      >
        <Menu
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          toggleMenu={toggleMenu}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
}


