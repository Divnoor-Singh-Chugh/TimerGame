import { useState,useRef } from "react";

export default function Player() {
  const [entertedPlayerName,setEnteredPlayerName]=useState('');
const playerName=useRef();

  const handleClick=()=>{
    setEnteredPlayerName(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {entertedPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
