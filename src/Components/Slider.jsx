
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import supabase from '../supabase';

import { useNavigate } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { LuUsers2 } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';

const SimpleSlider = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // دریافت داده‌های دوره‌ها از supabase
    const fetchData = async () => {
      const { data, error } = await supabase.from('sabzlearn-course').select('*');
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        setCourses(data);
      }
    };

    fetchData();
  }, []);

  const handleCourseClick = (courseType) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      navigate(`/course-info/${courseType}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="overflow-hidden p-4">
      <Swiper
        slidesPerView={1}  // تعداد اسلایدها در کوچکترین اندازه صفحه
        spaceBetween={10}  // فاصله بین اسلایدها در کوچکترین اندازه صفحه
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        autoplay={{ delay: 3000 }} // حرکت خودکار با تأخیر 3 ثانیه
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {courses.map(course => (
          <SwiperSlide 
            key={course.id} 
            onClick={() => handleCourseClick(course.type)}
          >
            <div dir="rtl" className="w-full h-auto">
              <div className="flex bg-white flex-col cursor-pointer shadow-sm h-full rounded-lg overflow-hidden">
                
                <img src={course.image} className="w-full h-auto" alt={course.title} />
                
                <div className='border-b-2 px-2 h-56'>
                  <h2 className="font-medium text-sm xl:text-xl py-4 h-16 lg:py-1 text-center">{course.title}</h2>
                  <p className="py-4 text-xs md:text-base text-gray-500 h-16  overflow-hidden text-center">
                    {course.desc}
                  </p>
                  <div className="flex py-4 justify-between border-slate-300 px-2">
                    <div className="flex items-center text-gray-500">
                      <CiUser className="w-4 h-4 md:w-5 md:h-5 " />
                      <span className="ml-1 text-xs lg:text-sm xl:text-base">{course.teacher}</span>
                    </div>
                    <div className="flex text-yellow-400 items-center">
                      <MdOutlineStar />
                      <span className="ml-1">5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="pb-3 px-4 mt-auto">
                  <div className="flex items-end h-10 lg:h-14 justify-end lg:justify-between mt-2">
                    <span className=" hidden lg:flex text-slate-500 gap-1 text-sm items-center">
                      <span className="ml-1">{course.viewer}</span>
                      <LuUsers2 className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-slate-500  flex text-xs xl:text-sm line-through mb-1">
                        {course.oldprice} تومان
                      </span>
                      <span className="text-green-500 text-xs xl:text-lg font-medium">
                        {course.price} تومان
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;





