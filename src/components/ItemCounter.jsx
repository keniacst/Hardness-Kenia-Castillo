import { useState } from "react";

const ItemCounter = () => {
  const [count, setCount] = useState(0)
  const stock = 200
  return (

    <div className= "ItemCounter">
      <button className="minusplus" onClick={() => {
        setCount(count === 0 ? count : count - 1);
        console.log(count)
      }}>
        -
      </button>
      <div className="num"> {count} </div>
      <button className="minusplus" onClick={() => {
        setCount(count < stock ? count + 1 : count);
        console.log(count)
      }}>
        +
      </button>
    </div>
  )
};

export default ItemCounter;