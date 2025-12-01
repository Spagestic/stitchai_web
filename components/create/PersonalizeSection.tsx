import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PersonalizeSectionProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  playerNumber: string;
  setPlayerNumber: (num: string) => void;
}

export default function PersonalizeSection({
  playerName,
  setPlayerName,
  playerNumber,
  setPlayerNumber,
}: PersonalizeSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <span className="size-5 text-muted-foreground">#</span>
        <h2 className="font-semibold">Personalize</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="playerName" className="text-muted-foreground">
            Player Name
          </Label>
          <Input
            id="playerName"
            placeholder="RONALDO"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
            className="h-14 text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring uppercase"
            maxLength={20}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="playerNumber" className="text-muted-foreground">
            Number
          </Label>
          <Input
            id="playerNumber"
            placeholder="7"
            value={playerNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 2);
              setPlayerNumber(value);
            }}
            className="h-14 text-base rounded-xl bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-ring"
            maxLength={2}
          />
        </div>
      </div>
    </section>
  );
}
