import React, { useState } from 'react';
import Game from'./components/Game.jsx';

function TailwindCss() {
  const [games, setGames] = useState([
    { id: 1, name: "Volleyball", players: "10M",color:"pink" },
    { id: 2, name: "Basketball", players: "2M" ,color:"green"},
    { id: 3, name: "Football", players: "50M" ,color:"blue"},
  ]);

  return (
    <div>
      <h1 className="text-center p-10 font-bold text-5xl bg-blue-500 text-red-500 ">
        Starting New Tailwind CSS Project
      </h1>

      <h1 className="text-3xl text-center mt-5">This is the index page...</h1>

      <h1 className="text-5xl font-bold text-center mt-10">Popular Games</h1>

      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}

{games.map(
        (game) =>{
            return(
                <Game key={game.id} game={game}/>   
            
            )
        }
    )}


    </div>
  );
}



export default TailwindCss;

<div>
  <Game/>
</div>


