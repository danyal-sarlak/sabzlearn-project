import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS

export default function LastCoursesSceleton() {
  return (
    <div dir="rtl" className="w-full h-fit">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="flex bg-gray-300 flex-col border border-neutral-100 cursor-pointer rounded-lg shadow-sm"
          >
            <Skeleton height={180} className="rounded-lg" />
            <div className="px-2 py-4">
              <Skeleton width="70%" height={20} className="mb-2" />
              <Skeleton height={60} />
            </div>
            <div className="pb-3 px-3">
              <div className="flex py-4 justify-between pb-4 border-b-2 border-slate-300 px-1">
                <div className="flex items-center text-gray-500">
                  <Skeleton circle={true} height={20} width={20} />
                  <Skeleton width="50%" height={15} className="ml-2" />
                </div>
                <div className="flex items-center">
                  <Skeleton width="30%" height={15} />
                </div>
              </div>

              <div className="flex items-end justify-between mt-2">
                <Skeleton width="30%" height={15} />
                <div className="flex flex-col ">
                  <Skeleton width="50%" height={15} className="mb-1" />
                  <Skeleton width="70%" height={15} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
