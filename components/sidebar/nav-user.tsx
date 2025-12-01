// @/components/sidebar/nav-user.tsx
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { createSessionClient } from "@/lib/server";
import { Skeleton } from "../ui/skeleton";
import { NavUserClient } from "./nav-user-client";

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

export async function NavUser() {
  const { account } = await createSessionClient();
  const user = await account.get();

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
