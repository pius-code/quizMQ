import React from "react";
import { UserRound, BadgeAlert } from "lucide-react";

interface GameHeaderInterface {
  GameMode: string;
  teamNumber: number | string;
}

const GameHeader: React.FC<GameHeaderInterface> = ({
  GameMode,
  teamNumber,
}) => {
  const count =
    typeof teamNumber === "string" ? parseInt(teamNumber, 10) || 0 : teamNumber;

  return (
    <div className="w-full h-20 border-[2px] border-r-blue-500 rounded-md flex ">
      <div>{GameMode}</div>
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <UserRound key={i} className="w-6 h-6 text-blue-600" />
        ))}
      </div>
      <div>
        <BadgeAlert />
      </div>
    </div>
  );
};

export default GameHeader;
