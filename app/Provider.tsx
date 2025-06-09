"use client";
import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>(null);

  const CreateNewUSer = async () => {
    const result = await axios.post("/api/user", {
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    setUserDetail(result.data);
  };

  useEffect(() => {
    user && CreateNewUSer();
  }, [user]);
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>;
    </UserDetailContext.Provider>
  );
};

export default Provider;
