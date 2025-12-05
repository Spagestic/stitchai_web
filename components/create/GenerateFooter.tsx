import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";

interface GenerateFooterProps {
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function GenerateFooter({
  onGenerate,
  isGenerating,
}: GenerateFooterProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 p-4 z-2">
      <div className="w-full mx-auto">
        <Button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full h-14 rounded-xl text-base font-semibold gap-2"
          size="lg"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="size-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="size-5" />
              Generate Jersey
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
