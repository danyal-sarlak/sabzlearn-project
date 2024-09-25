import React from "react";
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return (
    <div className="flex justify-around bg-slate-100 items-center">
      <img src="./images/mainImg.svg" alt="" />
      <div className=" hidden xl:pr-5  2xl:pr-0 xl:flex flex-col  items-center justify-start  ">
        <div dir="rtl" className="flex-col flex gap-y-6">
          <div>
            <span className="text-4xl  font-bold text-black  flex flex-wrap w-[330px]">    <Typewriter 
            onInit={(Typewriter)=>{
                Typewriter
                .typeString('آکادمی آموزش برنامه نویسی سبزلرن' )
                .start()
                .pauseFor(2000)
                .deleteAll()
            }}
            options={{
                loop:true
            }}
            
            /></span>
            <br />
           
           
          </div>
          
          
          <div>
            <span className="text-2xl font-medium text-black">
              با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با
            </span>
            <br />

            <span className="text-2xl font-medium text-black">
              خیال راحت یاد بگیر و پیشرفت کن
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
}
