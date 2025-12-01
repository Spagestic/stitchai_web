interface CustomColorPickerProps {
  customColors: string[];
  handleCustomColorChange: (index: number, color: string) => void;
}

export default function CustomColorPicker({
  customColors,
  handleCustomColorChange,
}: CustomColorPickerProps) {
  return (
    <div className="mt-4 p-4 rounded-xl bg-muted/30 border border-border">
      <p className="text-sm text-muted-foreground mb-3">
        Customize your colors
      </p>
      <div className="flex gap-4">
        {customColors.map((color, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <label
              className="w-12 h-12 rounded-full border-2 border-border cursor-pointer overflow-hidden"
              style={{ backgroundColor: color }}
            >
              <input
                type="color"
                value={color}
                onChange={(e) => handleCustomColorChange(index, e.target.value)}
                className="opacity-0 w-full h-full cursor-pointer"
              />
            </label>
            <span className="text-xs text-muted-foreground">
              Color {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
