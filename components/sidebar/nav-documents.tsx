"use client";

import Image from "next/image";
import { IconDots, IconShare3, IconTrash } from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

// Updated navDocumentsItems with real links to community creations
const navDocumentsItems = [
  {
    name: "Classic Red & White",
    url: "/jersey/2", // Classic Red (id: 2)
    image: "/jerseys/Classic_red_and_whit.png",
  },
  {
    name: "Modern Blue Gradient",
    url: "/jersey/3", // Ocean Wave (id: 3)
    image: "/jerseys/Modern_blue_gradient.png",
  },
  {
    name: "Retro 90s Style",
    url: "/jersey/4", // Retro Vibes (id: 4)
    image: "/jerseys/Retro_90s_style_jers.png",
  },
  {
    name: "Noel Diwali",
    url: "/jersey/10", // Festive Flair (id: 10)
    image: "/jerseys/noel_diwali.png",
  },
  {
    name: "Velocity",
    url: "/jersey/7", // Velocity (id: 7)
    image: "/jerseys/velocity.png",
  },
];

export function NavDocuments() {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Design History</SidebarGroupLabel>
      <SidebarMenu>
        {navDocumentsItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url} className="flex gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="rounded object-cover"
                />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconDots />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
