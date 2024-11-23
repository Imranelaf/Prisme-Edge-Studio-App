'use client';

import React, { useState } from 'react';

import AddGame from './game.components/Add';
import Default from './game.components/Default';
import Delete from './game.components/Delete';

function Games() {
  const [screen, setScreen] = useState<string>("");

  switch (screen) {
    case "Add":
      return (
        <div className="flex flex-col">
          <button
            className="w-1/6 m-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
            onClick={() => setScreen("")}
          >
          Return
          </button>
          <AddGame />
        </div>
      );
    case "modify":
      return <AddGame />;
    default:
      return ( 
        <div>
          <button
            onClick={() => setScreen("Add")}
            className="w-1/6 m-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
          >
            Add Game
          </button>
          <Default />
        </div>
      );
  }
}

export default Games;
