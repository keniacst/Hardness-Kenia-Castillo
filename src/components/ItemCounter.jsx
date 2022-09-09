import { useState } from "react";

const ItemCount = ({stock=200, initial=0, onAdd}) => {
  const [count, setCount] = useState(initial)
  
  return (<div className= "ItemCounter">
      <button className="minusplus" onClick={() => {
        setCount(count === 0 ? count : count - 1);
        console.log(count === 0 ? count : count - 1)
      }}>
        -
      </button>
      <div className="num"> {count} </div>
      <button className="minusplus" onClick={() => {
        setCount(count < stock ? count + 1 : count);
        console.log(count < stock ? count + 1 : count)
      }}>
        +
      </button>
    </div>
  )
};

export default ItemCount;