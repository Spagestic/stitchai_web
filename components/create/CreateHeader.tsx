import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CreateHeaderProps {
  onRandomize: () => void;
}

export default function CreateHeader({ onRandomize }: CreateHeaderProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="">
            <ArrowLeft />
          </Button>
        </Link>
        <h1 className="ml-2 text-md font-bold lg:text-lg">
          Create Your Jersey
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onRandomize}>
            <RefreshCw className="" size={"icon"} />
          </Button>
        </div>
      </div>
    </header>
  );
}
