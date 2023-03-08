import "./App.css";

import Main from "./main";
import NavBar from "./NavBar/NavBar";
import NavBarAndButton from "./NavBar/NavBar+MenuButton";

function App() {
  return (
    <div className="App">
      <NavBarAndButton />
      <Main />
    </div>
  );
}

export default App;
