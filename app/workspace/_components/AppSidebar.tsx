"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Book,
  Compass,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle2Icon,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const SideBarOptions = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/#",
    },
    {
      title: "My Learning",
      icon: Book,
      path: "/workspace/my-learning",
    },
    {
      title: "Explore Courses",
      icon: Compass,
      path: "/workspace/explore",
    },
    {
      title: "Ai Tools",
      icon: PencilRulerIcon,
      path: "/workspace/ai-tools",
    },
    {
      title: "Billing",
      icon: WalletCards,
      path: "/workspace/billing",
    },
    {
      title: "Profile",
      icon: UserCircle2Icon,
      path: "/workspace/profile",
    },
  ];

  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Image src={"/logo.png"} alt="Logo" width={130} height={120} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>Create New Course</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className="p-5">
                    <Link
                      href={option.path}
                      className={`text-[17px] ${
                        path.includes(option.path) &&
                        "text-primary bg-purple-50"
                      }`}
                    >
                      <option.icon className="h-7 w-7" />
                      <span>{option.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
