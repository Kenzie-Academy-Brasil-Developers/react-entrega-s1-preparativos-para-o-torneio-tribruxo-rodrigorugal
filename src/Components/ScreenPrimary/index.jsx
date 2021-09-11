import ButtonSwap from "../ButtonSwap";

const ScreenPrimary = ({ show, setShow }) => {
  return (
    <div className="tela_inicial">
      <div>
        <h1>Preparativos para o torneio Tribruxo</h1>
      </div>
      <div>
        <figure>
          <img src="./img/entregaChapel.png" alt="logo React" />
        </figure>
      </div>
      <ButtonSwap show={show} setShow={setShow} />
    </div>
  );
};
export default ScreenPrimary;
