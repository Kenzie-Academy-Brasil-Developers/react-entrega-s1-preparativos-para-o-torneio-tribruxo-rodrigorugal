import { useState } from "react";
import ButtonSwap from "../ButtonSwap";

import "./style.css";
const Characters = ({ characters, show, setShow }) => {
  const [listBruxos, setListBruxos] = useState([]);

  const bruxosRandom = () => {
    let arrayBruxos = [];

    while (arrayBruxos.length < 3) {
      let swap =
        characters[Math.floor(Math.random() * (characters.length - 1))];

      if (arrayBruxos.find((item) => item.house === swap.house) === undefined) {
        arrayBruxos.push(swap);
      }
    }
    setListBruxos(arrayBruxos);
  };

  if (listBruxos.length === 0) {
    bruxosRandom();
  }

  return (
    <>
      <div className="overFlow">
        <ul className="listBruxos">
          {listBruxos.map((bruxo) => (
            <li className="bruxos">
              <img className={bruxo.house} src={bruxo.image} alt={bruxo.name} />
              <div>
                <h3>{bruxo.name}</h3>
                <h4 className={"house" + bruxo.house}>{bruxo.house}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="bntTrio" onClick={bruxosRandom}>
          Próximo trio
        </button>
        <ButtonSwap show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default Characters;
