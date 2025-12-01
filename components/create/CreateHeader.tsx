import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CreateHeaderProps {
  onRandomize: () => void;
}

export default function CreateHeader({ onRandomize }: CreateHeaderProps) {
  const router = useRouter();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className=""
        >
          <ArrowLeft />
        </Button>
        <h1 className="ml-2 text-md font-bold lg:text-lg">
          Create Your Jersey
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <RefreshCw className="" size={"icon"} onClick={onRandomize} />
          </Button>
        </div>
      </div>
    </header>
  );
}
