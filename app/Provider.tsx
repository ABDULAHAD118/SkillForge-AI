"use client";
import React, { ReactNode, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const Provider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const CreateNewUSer = async () => {
    const result = await axios.post("/api/user", {
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result.data);
  };

  useEffect(() => {
    user && CreateNewUSer();
  }, [user]);
  return <div>{children}</div>;
};

export default Provider;
