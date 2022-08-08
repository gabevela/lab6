import './App.css';
import {Pokemon} from "./components/pokemon/pokemon"
import {useState} from "react";


function App() {

  // state = {
  //   pokemon_one: [hp : 150, image : "https://pokestop.io/img/pokemon/pikachu-256x256.png"]
  // }

  const [health1, setHealth1] = useState(150)
  const [health2, setHealth2] = useState(250)
  

  const pokemon_one = {hp : health1, image : "https://pokestop.io/img/pokemon/pikachu-256x256.png"}
  const pokemon_two = {hp : health2, image : "https://pokestop.io/img/pokemon/charizard-256x256.png"}

  return (
    <div className="App">
      
      <div class='fighters' > 
      <Pokemon
      // attack_handler={this.pokemon_two}
      image={pokemon_one.image}
      hp={pokemon_one.hp}/>
      <Pokemon
      // attack_handler={this.pokemon_two.hp}
      image={pokemon_two.image}
      hp={pokemon_two.hp}/>
      </div>
    </div>
  );
}

export default App;
