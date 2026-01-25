import React, { useState } from "react";
import Head from "next/head";
import Mode from "../components/mode";
import { useRouter } from "next/navigation";

const modes = [
  { Name: "Full Competition", color: "black" },
  { Name: "Speed Race", color: "blue" },
  { Name: "True or False", color: "red" },
  { Name: "Problem of the day", color: "green" },
  { Name: "Riddles", color: "purple" },
];

export default function HomePage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const goToTeamSelection = () => {
    router.push(
      `./teamSelection?selectedMode=${encodeURIComponent(selectedMode)}`,
    );
  };

  const handleSelect = (modeName: string) => {
    setSelectedMode(modeName);
  };
  return (
    <React.Fragment>
      <Head>
        <title>QuizMQ</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <p>Select Mode</p>
        <div>
          {modes.map((mode, key) => (
            <Mode
              Name={mode.Name}
              key={key}
              onSelect={() => handleSelect(mode.Name)}
              selected={selectedMode === mode.Name}
            />
          ))}
        </div>
        <button
          disabled={!selectedMode}
          className="w-auto p-3 bg-black text-black rounded disabled:opacity-50 mt-4"
          onClick={goToTeamSelection}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}
