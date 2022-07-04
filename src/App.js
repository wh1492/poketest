import List from "./components/List/List";
import Search from "./components/Search/Search";
import { PokemonListProvider } from "./context/PokemonListContext";
import "./App.scss";

function App() {
  return (
    <PokemonListProvider>
      <div className="App">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    </PokemonListProvider>
  );
}

export default App;
