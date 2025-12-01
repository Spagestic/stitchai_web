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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-linear-to-t from-background via-background to-transparent z-50">
      <div className="container mx-auto">
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
