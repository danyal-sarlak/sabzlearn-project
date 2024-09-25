import React from 'react'

import Slider from './Slider'
import CourseTitle from './CourseTitle'


export default function PopularCourses() {
  return (
    <div>
       <div className=' lg:px-24 px-6 py-8'>
        <CourseTitle
        title='  پرطرفدار ترین دوره ها'
        desc='دوره های محبوب و پروژه محور سبزلرن'
        
        />
        
    </div>
    <div className='pt-7 px-4 lg:px-16 xl:px-20'>
      <Slider/>
    </div>
 

    </div>
   
  )
}
