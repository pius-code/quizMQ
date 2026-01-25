interface ModeProps {
  Name: string;
  color?: string;
  onSelect?: () => void;
  selected?: boolean;
}

const Mode = ({
  Name = "Default",
  color = "black",
  onSelect,
  selected = false,
}: ModeProps) => {
  return (
    <button
      className={`w-full h-28 border-2 ${selected ? "border-blue-800" : ""}`}
      style={{ backgroundColor: color, color: "white" }}
      onClick={onSelect}
    >
      {Name}
    </button>
  );
};

export default Mode;
