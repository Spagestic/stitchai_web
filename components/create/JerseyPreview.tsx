import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

import { useEffect, useState } from "react";

interface JerseyPreviewProps {
  isGenerating: boolean;
  generatedImage: string | null;
}

export default function JerseyPreview({
  isGenerating,
  generatedImage,
}: JerseyPreviewProps) {
  // Local loading state for error fallback
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // If not generating and there is a generatedImage, show loading for 2s before showing image
    if (!isGenerating && generatedImage) {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
        setShowImage(false);
      };
    }
  }, [isGenerating, generatedImage]);

  return (
    <div className="container px-4 pt-6">
      {isGenerating || (!showImage && generatedImage) ? (
        <div className="w-full flex justify-center items-center">
          <Skeleton className="w-full aspect-square rounded-2xl max-w-[380px] h-[380px]" />
        </div>
      ) : generatedImage && showImage ? (
        <div className="w-full flex justify-center">
          {generatedImage.startsWith("data:") ? (
            <Image
              width={380}
              height={380}
              src={generatedImage}
              alt="Generated Jersey"
              className="rounded-2xl aspect-square shadow-md object-contain max-w-[380px] max-h-[380px]"
            />
          ) : (
            <Image
              src={generatedImage}
              alt="Generated Jersey"
              width={380}
              height={380}
              className="rounded-2xl aspect-square shadow-md object-contain"
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
