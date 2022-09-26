
const Counter = ({minusClickHandler, plusClickHandler, count}) => {
  return (
      <div className="item-counter">
        <button
          className="minusplus"
          onClick={() => {
            minusClickHandler();
          }}
        >
          -
        </button>
        <div className="num"> {count} </div>
        <button
          className="minusplus"
          onClick={() => {
            plusClickHandler();
          }}
        >
          +
        </button>
      </div>
  );
};
export default Counter;
