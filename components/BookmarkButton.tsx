"use client";

import { Bookmark } from "lucide-react";

type BookmarkButtonProps = {
  jerseyId: number;
};

export const BookmarkButton = ({ jerseyId }: BookmarkButtonProps) => {
  return (
    <button
      className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-white/30 transition-colors"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // Handle bookmark action here
        console.log("Bookmark jersey:", jerseyId);
      }}
    >
      <Bookmark className="size-4 text-white" strokeWidth={2} />
    </button>
  );
};
