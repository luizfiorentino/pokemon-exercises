import "./App.css";
import Title from "./Components/Title";
import PokeCard from "./Components/PokeCard";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    url: "https://images.gameinfo.io/pokemon/256/p6f102.webp",
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
    url: "https://img.joomcdn.net/32bd764d8b970d453c4efac20d566aa2e993fc9f_original.jpeg",
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f2.png",
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
  },
];

function App() {
  return (
    <main className="container my-5">
      <Title content="Some Simple Title" />
      <div className="row">
        {all_pokemon.map((pokemon, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <PokeCard
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
              url={pokemon.url}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
export default App;
