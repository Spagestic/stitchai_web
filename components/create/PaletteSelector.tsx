import { Palette, Plus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { colorPalettes, ColorPalette } from "@/constants/jersey";

interface PaletteSelectorProps {
  selectedPalette: ColorPalette | null;
  setSelectedPalette: (palette: ColorPalette) => void;
  customColors: string[];
  setSelectedCustom: () => void;
}

export default function PaletteSelector({
  selectedPalette,
  setSelectedPalette,
  setSelectedCustom,
}: PaletteSelectorProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Palette className="size-5 text-muted-foreground" />
        <h2 className="font-semibold">Color Palette</h2>
        <span className="text-sm text-muted-foreground">
          ({colorPalettes.length} available)
        </span>
      </div>
      <div className="flex gap-3 pb-2">
        <ScrollArea className="">
          <div
            className="palette-selector-container"
            style={{
              maxWidth: "100vw",
              overflowX: "auto",
              padding: "8px 0",
            }}
          >
            <div
              className="palette-selector"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "nowrap",
              }}
            >
              <button
                onClick={setSelectedCustom}
                className={cn(
                  "flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl border transition-all",
                  selectedPalette?.id === "custom"
                    ? "border-foreground bg-foreground/5"
                    : "border-border bg-card hover:bg-accent"
                )}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50">
                  <Plus className="size-5 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">Custom</span>
              </button>
              {colorPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => setSelectedPalette(palette)}
                  className={cn(
                    "flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl border transition-all",
                    selectedPalette?.id === palette.id
                      ? "border-foreground bg-foreground/5"
                      : "border-border bg-card hover:bg-accent"
                  )}
                >
                  <div className="flex -space-x-1">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-background"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
