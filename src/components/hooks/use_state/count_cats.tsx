import { useState } from "react";

export function CountCats() {

  const [cats, setCats] = useState("");

  function incrementCats() {
    setCats((cats: string) => `${cats}🐈`);
  }

  function resetCats() {
    setCats("");
  }

  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>

    <button onClick = {incrementCats}>
      There are {cats.length/2} cats 🥳
    </button>
    <button onClick = {resetCats}>
      Reset cat count 🐈
    </button>
    </>
  );
}