import { Shirt } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { jerseyStyles } from "@/constants/jersey";
import { Button } from "../ui/button";

interface StyleSelectorProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  styleIcons?: Record<string, React.ComponentType<{ className?: string }>>;
}

export default function StyleSelector({
  selectedStyle,
  setSelectedStyle,
}: StyleSelectorProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Shirt className="size-5 text-muted-foreground" />
        <h2 className="font-semibold">Style</h2>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-3 pb-2">
          {jerseyStyles.map((style) => {
            return (
              <Button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                variant={selectedStyle === style.id ? "default" : "outline"}
              >
                <span className="font-medium">{style.name}</span>
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
