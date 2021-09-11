import "./style.css";
const ButtonSwap = ({ show, setShow }) => {
  const handlerClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="bntStart" onClick={handlerClick}>
        Início
      </button>
    </div>
  );
};
export default ButtonSwap;
