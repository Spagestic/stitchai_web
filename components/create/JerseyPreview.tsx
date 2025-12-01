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
          <Image
            src={generatedImage}
            alt="Generated Jersey"
            width={380}
            height={380}
            className="rounded-2xl aspect-square shadow-md object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
