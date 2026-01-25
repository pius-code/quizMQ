import React from "react";
interface TeamSelectionProps {
  Number?: string;
  onSelect?: () => void;
  selected?: boolean;
}

const TeamSelectionComponent = ({
  Number,
  onSelect,
  selected,
}: TeamSelectionProps) => {
  return (
    <button onClick={onSelect}>
      <p
        className={` bg-gray-950 text-white p-10 m-10 ${selected ? "bg-white text-blue-800" : " "}`}
      >
        {Number}
      </p>
    </button>
  );
};

export default TeamSelectionComponent;
