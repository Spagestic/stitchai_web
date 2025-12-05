import { Shirt } from "lucide-react";
import { jerseyStyles } from "@/constants/jersey";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

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
      <Select value={selectedStyle} onValueChange={setSelectedStyle}>
        <SelectTrigger className="w-full" size="default">
          <SelectValue placeholder="Select style" />
        </SelectTrigger>
        <SelectContent>
          {jerseyStyles.map((style) => (
            <SelectItem key={style.id} value={style.id}>
              {style.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
