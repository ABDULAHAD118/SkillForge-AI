"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-3xl">Course List</h2>
      {courseList?.length == 0 ? (
        <div className="flex p-7 items-center justify-center flex-col border rounded-2xl mt-2 bg-secondary">
          <Image
            src={"/online-education.png"}
            alt="No Courses Available"
            width={80}
            height={80}
          />
          <h2 className="my-2 text-lg font-bold">
            Look like you haven't created any course
          </h2>
          <Button>+ Create Your First Course</Button>
        </div>
      ) : (
        <div>List of Courses</div>
      )}
    </div>
  );
};

export default CourseList;
