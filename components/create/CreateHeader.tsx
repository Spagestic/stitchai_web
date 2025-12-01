import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface CreateHeaderProps {
  onRandomize: () => void;
}

export default function CreateHeader({ onRandomize }: CreateHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <button className="p-2 rounded-full hover:bg-accent transition-colors">
            <ArrowLeft className="size-5" />
          </button>
        </Link>
        <h1 className="text-xl font-bold">Create Jersey</h1>
        <button
          onClick={onRandomize}
          className="p-2 rounded-full hover:bg-accent transition-colors"
        >
          <RefreshCw className="size-5" />
        </button>
      </div>
    </header>
  );
}
