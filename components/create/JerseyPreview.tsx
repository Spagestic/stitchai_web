import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface JerseyPreviewProps {
  isGenerating: boolean;
  generatedImage: string | null;
}

export default function JerseyPreview({
  isGenerating,
  generatedImage,
}: JerseyPreviewProps) {
  return (
    <div className="container px-4 pt-6">
      {isGenerating ? (
        <div className="w-full flex justify-center items-center">
          <Skeleton className="w-full aspect-square rounded-2xl max-w-[380px] h-[380px]" />
        </div>
      ) : generatedImage ? (
        <div className="w-full flex justify-center">
          {generatedImage.startsWith("data:") ? (
            // For base64 data URLs, use img tag instead of Next Image
            <Image
              width={380}
              height={380}
              src={generatedImage}
              alt="Generated Jersey"
              className="rounded-2xl aspect-square shadow-md object-contain max-w-[380px] max-h-[380px]"
            />
          ) : (
            // For regular URLs, use Next Image component
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
