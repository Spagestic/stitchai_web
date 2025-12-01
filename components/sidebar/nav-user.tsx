// @/components/sidebar/nav-user.tsx
"use client";

import { useEffect, useState } from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { account } from "@/lib/appwrite";
import { Skeleton } from "../ui/skeleton";
import { NavUserClient } from "./nav-user-client";
import type { Models } from "appwrite";

export function LoadingUser() {
  return (
    <div className="flex items-center justify-center px-2 py-2">
      <Skeleton className="size-8 rounded-full" />
      <div className="flex-1 px-2 py-2 space-y-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
}

export function NavUser() {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <LoadingUser />;
  }

  if (!user) {
    // Handle unauthenticated state - redirect to login or show guest UI
    return null;
  }

  const userData = {
    name: user.name,
    email: user.email,
    imageUrl: "",
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <NavUserClient user={userData} />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
