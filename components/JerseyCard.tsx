"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

type Jersey = {
  id: number;
  source: string;
  name: string;
  creator: string;
  creatorImage?: string;
  tags?: string[];
};

type JerseyCardProps = {
  jersey: Jersey;
  onPress?: (jerseyId: number) => void;
};

export const JerseyCard = ({ jersey, onPress }: JerseyCardProps) => {
  const hasTags = jersey.tags && jersey.tags.length > 0;

  return (
    <button
      className="relative aspect-3/4 w-full overflow-hidden rounded-3xl group cursor-pointer"
      onClick={() => onPress?.(jersey.id)}
    >
      {/* Background Image */}
      <Image
        src={jersey.source}
        alt={jersey.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Gradient Overlay - from black at bottom to transparent at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Top Header */}
      <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Avatar className="size-6 border-2 border-white/30">
            <AvatarImage src={jersey.creatorImage} />
            <AvatarFallback className="text-[10px] bg-white/20 text-white">
              {getInitials(jersey.creator)}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-white text-xs drop-shadow-md">
            {jersey.creator}
          </span>
        </div>
        {/* Right */}
        <button className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-white/30 transition-colors">
          <Bookmark className="size-4 text-white" strokeWidth={2} />
        </button>
      </div>

      {/* Bottom - Jersey Info */}
      <div className="absolute right-4 bottom-4 left-4 z-10">
        <div className="flex flex-col gap-0">
          <span className="font-medium text-white text-sm leading-relaxed drop-shadow-md">
            {jersey.name}
          </span>
          {hasTags && (
            <span className="font-normal text-white/70 text-[10px]">
              {jersey.tags?.join(" • ")}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};
