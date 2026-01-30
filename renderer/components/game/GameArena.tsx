import React, { useState } from "react";
import questions from "../../store/test.json";
import round1 from "../../store/round1.json";
import { useRouter } from "next/navigation";

const getRandomQuestion = (currentPart: string) => {
  if (!questions[currentPart] || questions[currentPart].length === 0) {
    console.log("Hmm, very weird");
    return null;
  }
  const lengthOfPart = questions[currentPart]?.length;
  const randNo = Math.floor(Math.random() * lengthOfPart);
  return questions[currentPart][randNo];
};

const GameArena = () => {
  const [count, setCount] = useState(1);
  const [partNum, setPartNum] = useState(1);
  const [currentPart, setCurrentPart] = useState(`part${partNum}`);
  const [question, setquestion] = useState(() =>
    getRandomQuestion(currentPart),
  );
  const [currentRound, setCurrentRound] = useState("round1");
  const router = useRouter();
  const gotoHome = () => {
    router.push("../../pages/home.tsx");
  };

  const handleNext = () => {
    if (count <= 4) {
      setCount(count + 1);
      setquestion(getRandomQuestion(currentPart));
      console.log(count);
    } else {
      setCount(1);
      setPartNum(partNum + 1);
      setCurrentPart(`part${partNum + 1}`);
      setquestion(getRandomQuestion(`part${partNum + 1}`));
      console.log(count + "false else");
    }
  };

  if (!question) {
    return <div>No questions available</div>;
  }

  return (
    <div className="bg-gray-700 w-full h-[85vh] flex flex-col items-center p-4 gap-4 justify-between">
      <div className="flex justify-between w-full">
        <div className="w-10 h-10 rounded-full bg-gray-950"></div>
        <div>AI</div>
      </div>
      <div>
        <div>{question.question}</div>
        <button>Answer : {question.answer}</button>
      </div>
      <div className="w-full flex justify-between">
        <button className="p-4 bg-gray-700 rounded-lg" onClick={handleNext}>
          Next
        </button>
        <button className="p-4 bg-gray-700 rounded-lg">Previous</button>
      </div>
      <button
        className="w-24 h-24 bg-gray-800 p-3 rounded-md"
        onClick={gotoHome}
      >
        End quiz
      </button>
    </div>
  );
};

export default GameArena;
