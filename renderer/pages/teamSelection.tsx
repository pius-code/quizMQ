import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TeamSelectionComponent from "../components/Team/teamSelectionComponent";

const Team = ["1", "2", "3", "4"];

const TeamSelection = () => {
  const [selectedx, setIsSelected] = useState("");
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  const gotoGame = () => {
    const url =
      typeof window !== "undefined" ? new URL(window.location.href) : null;
    if (url) {
      url.searchParams.set("teams", selectedx);
    }
    url.pathname = "/game";
    router.push(url.pathname + url.search);
  };

  const goToHome = () => {
    router.push("./home");
  };

  const handleSelect = (Name: string) => {
    setIsSelected(Name);
    setShowButton(true);
  };

  useEffect(() => {
    const href = typeof window !== "undefined" ? window.location.href : "";
    console.log("Full URL:", href);
    return () => {};
  }, []);

  return (
    <div>
      <p>How many teams/contestants?</p>
      {Team.map((team, key) => (
        <TeamSelectionComponent
          Number={team}
          key={key}
          onSelect={() => handleSelect(team)}
          selected={selectedx === team}
        />
      ))}
      {showButton && (
        <button className="p-10 m-10 bg-gray-950 text-white" onClick={gotoGame}>
          Next
        </button>
      )}
      <button className="p-10 m-10 bg-gray-950 text-white" onClick={goToHome}>
        Back
      </button>
    </div>
  );
};

export default TeamSelection;
