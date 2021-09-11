import "./App.css";
import { useEffect, useState } from "react";
import ScreenSecundary from "./Components/ScreenSecundary";
import ScreenPrimary from "./Components/ScreenPrimary";
function App() {
  const [characters, setCharacterList] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <main className="App-header">
        {show ? (
          <ScreenPrimary show={show} setShow={setShow} />
        ) : (
          <ScreenSecundary
            characters={characters}
            show={show}
            setShow={setShow}
          />
        )}
      </main>
    </div>
  );
}

export default App;
