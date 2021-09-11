import Characters from "../Characters";

const ScreenSecundary = ({ characters, show, setShow }) => {
  return (
    <div className="screen_secundary">
      <div>
        <h1>Preparativos para o torneio Tribruxo</h1>
      </div>
      <div className="container">
        <Characters characters={characters} show={show} setShow={setShow} />
      </div>
    </div>
  );
};
export default ScreenSecundary;
