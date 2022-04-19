import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import PokeCard from "./Components/PokeCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Crazy Pokes" />

        <PokeCard
          name="Bulbassur"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
        />

        <PokeCard
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />

        <PokeCard
          name="Mewtow"
          weight={122}
          awesome={true}
          terrifying={true}
          abilities={["Pressure", "Unnerve", "Steadfast claws", "Insomnia"]}
        />

        <PokeCard
          name="Mega Beedrill"
          weight={65}
          awesome={false}
          terrifying={true}
          abilities={["Intimidate", "Unnerve power"]}
        />
      </header>
    </div>
  );
}

export default App;

/*
Charizard	90 kg	yes	no	Blaze, Solar power, Tough claws, Drought
Bulbasaur	6.9 kg	yes	no	Overgrow, Chlorophyll
Mewtwo	122 kg	yes	yes	Pressure, Unnerve, Steadfast, Insomnia
Mega beedrill	65 kg	no	yes	Intimidate, Unnerve
*/
