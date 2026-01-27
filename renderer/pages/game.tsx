import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GameHeader from "../components/game/GameHeader";
import GameArena from "../components/game/GameArena";

const Game = () => {
  const searchParams = useSearchParams();
  const selectedMode = searchParams?.get("selectedMode") ?? "";
  const teamNumber = searchParams?.get("teams") ?? "";

  useEffect(() => {
    const href = typeof window !== "undefined" ? window.location.href : "";
    console.log("Full URL:", href);
    return () => {};
  }, []);
  return (
    <div>
      <GameHeader GameMode={selectedMode} teamNumber={teamNumber} />
      <GameArena />
    </div>
  );
};

export default Game;
