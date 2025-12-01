import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface DescriptionSectionProps {
  description: string;
  setDescription: (desc: string) => void;
}

export default function DescriptionSection({
  description,
  setDescription,
}: DescriptionSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="size-5 text-muted-foreground" />
        <h2 className="font-semibold">Describe Your Jersey</h2>
      </div>
      <Textarea
        placeholder="Add any specific details you'd like for your jersey design... (e.g., 'geometric patterns', 'vintage 90s style', 'gradient effect')"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="min-h-[100px] text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring resize-none"
      />
    </section>
  );
}
