import React from "react";

const GameArena = () => {
  return (
    <div className="bg-gray-700 w-full h-[85vh] flex flex-col items-center p-4 gap-4 justify-between">
      <div className="flex justify-between w-full">
        <div className="w-10 h-10 rounded-full bg-gray-950"></div>
        <div>AI</div>
      </div>
      <div>
        <div>Question comess in here</div>
        <button>Answer</button>
      </div>
      <div className="w-full flex justify-between">
        <button className="p-4 bg-gray-700 rounded-lg">Next</button>
        <button className="p-4 bg-gray-700 rounded-lg">Previous</button>
      </div>
    </div>
  );
};

export default GameArena;
