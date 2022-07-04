import List from "./components/List/List";
import Search from "./components/Search/Search";
import { PokemonProvider } from "./context/PokemonContext";
import "./App.scss";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    </PokemonProvider>
  );
}

export default App;
