import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles, RotateCcw, ShoppingCart } from "lucide-react";

interface GenerateFooterProps {
  onGenerate: () => void;
  isGenerating: boolean;
  generatedImage: string | null;
}

export default function GenerateFooter({
  onGenerate,
  isGenerating,
  generatedImage,
}: GenerateFooterProps) {
  const handleRemix = () => {
    onGenerate();
  };

  const handleOrder = () => {
    // TODO: Implement order functionality
    console.log("Order clicked");
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 p-4 z-2">
      <div className="w-full mx-auto space-y-3">
        {generatedImage && !isGenerating ? (
          <div className="flex gap-3">
            <Button
              onClick={handleRemix}
              disabled={isGenerating}
              className="flex-1 h-14 rounded-xl text-base font-semibold gap-2"
              variant="outline"
              size="lg"
            >
              <RotateCcw className="size-5" />
              Remix
            </Button>
            <Button
              onClick={handleOrder}
              className="flex-1 h-14 rounded-xl text-base font-semibold gap-2"
              size="lg"
            >
              <ShoppingCart className="size-5" />
              Order
            </Button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
