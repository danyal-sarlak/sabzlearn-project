
import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import supabase from "../supabase";

import CourseInfoSkeleton from "../Components/CourseInfoSkeleton";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LazyCourseDetails = lazy(() => import("../Components/CourseDetailsInfo"));

const fetchCourse = async (courseType) => {
  const { data, error } = await supabase
    .from("sabzlearn-course")
    .select("*")
    .eq("type", courseType)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export default function CourseInfo() {
  const { courseType } = useParams();
  
  const { data: course, error, isLoading } = useQuery({
    queryKey: ['course', courseType],
    queryFn: () => fetchCourse(courseType),
    enabled: !!courseType,
  });

  if (error) {
    console.error(error.message);
    return <div className="flex items-center justify-center text-2xl">Error loading course data</div>;
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Navbar />
      <Suspense fallback={<div className="flex items-center justify-center"><CourseInfoSkeleton /></div>}>
        {course ? (
          <LazyCourseDetails course={course} />
        ) : (
          <CourseInfoSkeleton />
        )}
      </Suspense>
      <Footer className="max-h-[56px]" />
    </div>
  );
}
