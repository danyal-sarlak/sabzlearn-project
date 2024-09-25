
/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { basketState, removeItem } from "../redux/basketSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Basket() {
  const { items } = useSelector(basketState); // دریافت تمام آیتم‌ها از سبد خرید
  const dispatch = useDispatch(); // برای ارسال اکشن‌های ریداکس

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // ارسال اکشن برای حذف آیتم
  };

  // محاسبه مبلغ کل
  const totalAmount = items.reduce(
    (total, item) =>
      total +
      Number(
        item.price
          .toString()
          .replace(/,/g, "")
          .replace(/[^\d.-]/g, "")
      ),
    0
  );
  const formattedTotalAmount = totalAmount.toLocaleString();

  return (
    <div>
      <Topbar/>
      <Navbar/>
    <div className="flex flex-col  lg:flex-row justify-start lg:mx-16 p-6 space-y-6 lg:space-y-0">
    
      <div className="w-full  lg:w-3/12 ml-0 lg:ml-4">
        {" "}
        
        <h1
          dir="rtl"
          className="text-right p-5 text-white text-2xl rounded-t-lg bg-green-500"
        >
          اطلاعات پرداخت{" "}
        </h1>
        <div className="flex bg-gray-100 rounded-xl items-center justify-end w-full">
          <div className="flex flex-col space-y-4 w-full">
           
            <div className="text-gray-500 font-medium p-4 flex justify-between">
              <p dir="rtl" className="pr-16">
                {formattedTotalAmount} تومان
              </p>
              <p>مبلغ کل</p> 
            </div>
            <div className=" text-red-500 font-medium p-4 flex justify-between">
              <p dir="rtl" className="pr-16">
                0
              </p>
              <p>تخفیف</p> 
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-xl lg:w-9/12 ml-0 lg:ml-4">
        {" "}
      
        <h1
          dir="rtl"
          className="text-right p-5 text-white text-2xl rounded-t-lg bg-green-500"
        >
          سبد خرید
        </h1>
        {items.length === 0 ? (
          <div className="text-center p-6 text-xl text-gray-500">
            سبد خرید خالی است
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col-reverse lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-3 space-x-reverse w-full p-4"
            >
              <div
                className="w-full lg:w-auto  py-2 h-auto rounded-lg mt-1 lg:bg-slate-100 bg-red-500 flex items-center justify-center"
                onClick={() => handleRemoveItem(item)}
              >
                <FaRegTrashCan className="cursor-pointer rounded-md text-white lg:text-red-500 w-5 h-5" />
              </div>

              <div className="flex  flex-col-reverse lg:flex-row lg:gap-x-2 lg:items-center">
                <div className="text-right w-full lg:w-auto">
                  <h2 dir="rtl" className="text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p>قیمت: {item.price} تومان</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full lg:w-36 h-auto lg:h-28 ml-auto mr-0"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
     <Footer />
    </div>
  );
}
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { basketState, removeItem } from "../redux/basketSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import Topbar from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Basket() {
  const { items } = useSelector(basketState); // دریافت تمام آیتم‌ها از سبد خرید
  const dispatch = useDispatch(); // برای ارسال اکشن‌های ریداکس

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // ارسال اکشن برای حذف آیتم
  };

  // محاسبه مبلغ کل
  const totalAmount = items.reduce(
    (total, item) =>
      total +
      Number(
        item.price
          .toString()
          .replace(/,/g, "")
          .replace(/[^\d.-]/g, "")
      ),
    0
  );
  const formattedTotalAmount = totalAmount.toLocaleString();

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-4 p-6">
        <div className="col-span-1 lg:col-span-3">
          <h1 dir="rtl" className="text-right p-5 text-white text-2xl rounded-t-lg bg-green-500">
            اطلاعات پرداخت
          </h1>
          <div className="flex bg-gray-100 rounded-b-xl items-center justify-end w-full">
            <div className="flex flex-col space-y-4 w-full">
              <div className="text-gray-500 font-medium p-4 flex justify-between">
                <p dir="rtl" className="pr-16">
                  {formattedTotalAmount} تومان
                </p>
                <p>مبلغ کل</p>
              </div>
              <div className="text-red-500 font-medium p-4 flex justify-between">
                <p dir="rtl" className="pr-16">0</p>
                <p>تخفیف</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 h-fit lg:col-span-9 bg-gray-100 rounded-xl">
          <h1 dir="rtl" className="text-right p-5 text-white text-2xl rounded-t-lg bg-green-500">
            سبد خرید
          </h1>
          {items.length === 0 ? (
            <div className="text-center p-6 text-xl text-gray-500">
              سبد خرید خالی است
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-3 space-x-reverse w-full p-4"
              >
                <div
                  className="w-full lg:w-auto py-2 h-auto rounded-lg mt-1 lg:bg-slate-100 bg-red-500 flex items-center justify-center"
                  onClick={() => handleRemoveItem(item)}
                >
                  <FaRegTrashCan className="cursor-pointer rounded-md text-white lg:text-red-500 w-5 h-5" />
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:gap-x-2 lg:items-center">
                  <div className="text-right w-full lg:w-auto">
                    <h2 dir="rtl" className="text-xl  py-1 font-semibold">{item.title}</h2>
                    <p>قیمت: {item.price} تومان</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full lg:w-36 h-auto lg:h-28 ml-auto mr-0"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
