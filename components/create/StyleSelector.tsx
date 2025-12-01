import { Shirt } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { jerseyStyles } from "@/constants/jersey";

interface StyleSelectorProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  styleIcons: Record<string, React.ComponentType<{ className?: string }>>;
}

export default function StyleSelector({
  selectedStyle,
  setSelectedStyle,
  styleIcons,
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
            const Icon =
              styleIcons[style.id as keyof typeof styleIcons] || Shirt;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl border transition-all min-w-fit",
                  selectedStyle === style.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:bg-accent"
                )}
              >
                <Icon className="size-4" />
                <span className="font-medium">{style.name}</span>
              </button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
