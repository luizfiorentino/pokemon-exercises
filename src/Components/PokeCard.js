import React from "react";

const all_pokemon = [
  { name: "Charizard", weight: 90 },
  { name: "Bulbasaur", weight: 6.9 },
  { name: "Mewtwo", weight: 122 },
  { name: "Mega beedrill", weight: 65 },
];

const weights = all_pokemon.map((p) => {
  return p.weight;
});
console.log(weights);

//Use the .map method and console.log to print an array of the name + weights of
//each of these Pokemon to the Console, like so: "Charizard: 90 kg", etc.

const blah = all_pokemon.map((p) => {
  return `${p.name}: ${p.weight} kilos`;
});
console.log(blah);

export default function (props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.weight} kilos</p>
      <p>Awesome ? {props.awesome ? "Yesss" : "Nah, not awesome"}</p>
      <p>Terrifying ? {props.terrifying ? "Aha, very!" : "Nope, kind poke!"}</p>
      <p>Abilities:</p>
      <p>{props.abilities.length}</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
