"use client";

import { ChevronDownIcon, Palette } from "lucide-react";
import { useId, useState } from "react";
import { colorPalettes, ColorPalette } from "@/constants/jersey";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PaletteSelectorProps {
  selectedPalette: ColorPalette | null;
  setSelectedPalette: (palette: ColorPalette) => void;
}

export default function PaletteSelector({
  selectedPalette,
  setSelectedPalette,
}: PaletteSelectorProps) {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredPalettes = colorPalettes.filter((palette: ColorPalette) =>
    palette.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (paletteId: string) => {
    const palette = colorPalettes.find((p) => p.id === paletteId);
    if (palette) setSelectedPalette(palette);
    setOpen(false);
    setSearchValue("");
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Palette className="size-5 text-muted-foreground" />
        <h2 className="font-semibold">Color Palette</h2>
        <span className="text-sm text-muted-foreground">
          ({colorPalettes.length} available)
        </span>
      </div>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between border-input bg-background px-3 font-normal outline-none outline-offset-0 hover:bg-background focus-visible:outline-[3px]"
            id={id}
            role="combobox"
            variant="outline"
          >
            {selectedPalette ? (
              <span className="flex min-w-0 items-center gap-2">
                <div className="flex -space-x-1">
                  {selectedPalette.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full border border-background inline-block"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="truncate text-sm font-medium">
                  {selectedPalette.name}
                </span>
              </span>
            ) : (
              <span className="text-muted-foreground">Select palette</span>
            )}
            <ChevronDownIcon
              aria-hidden="true"
              className="shrink-0 text-muted-foreground/80"
              size={16}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-full min-w-(--radix-popper-anchor-width) border-input p-0"
        >
          <Command>
            <CommandInput
              placeholder="Search palettes..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>No palette found.</CommandEmpty>
              <CommandGroup>
                {/* Custom palette option removed */}
                {filteredPalettes.map((palette) => (
                  <CommandItem
                    key={palette.id}
                    value={palette.id}
                    onSelect={() => handleSelect(palette.id)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {palette.colors.map((color, index) => (
                          <span
                            key={index}
                            className="w-4 h-4 rounded-full border border-background inline-block"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {palette.name}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </section>
  );
}
