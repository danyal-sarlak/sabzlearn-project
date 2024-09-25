import React, { lazy, Suspense } from "react";

import LastCoursesSceleton from "./LastCoursesSceleton";
import CourseTitle from "./CourseTitle";
const LazyCourseBox = lazy(()=>import("../Components/CourseBox"))

export default function LastCourses() {
  return (
    <div className="px-6 lg:px-16 xl:px-24">
      <div className="py-5">
        <CourseTitle
          title="آخرین دوره‌های سبزلرن"
          desc="سکوی پرتاب شما به سمت موفقیت"
        />
      </div>

      <div className="w-full">
        <Suspense fallback={<div className="flex items-center justify-center"><LastCoursesSceleton/></div>}>
          <LazyCourseBox/>

        </Suspense>
       
        
      </div>
    </div>
  );
}

