import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../contexts/CartContex";
import numberWithDots from "../Utils";

const Cart = ({ products, total, emptyCartClickHandler }) => {
  const { removeItem } = useContext(CartContext);

  const removeItemClickHandler = (itemId) => {
    removeItem(itemId);
  }

  return (
    <div className="cart">
      <Table striped hover bordered={false}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Valor</th>
            <th>Cantidad</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>$ {numberWithDots(product.price)}</td>
                <td>{product.quantity}</td>
                <td>
                  {" "}
                  <button> x </button>{" "}
                  {/* <button onClick={removeItemClickHandler(product.id)}> x </button>{" "} */}
                </td>
              </tr>
            );
          })}
          <tr>
            <td> </td>
            <td> </td>
            <td> Total</td>
            <td> $ {numberWithDots(total())} </td>
            <td> </td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={emptyCartClickHandler}> EmptyCart </Button>
    </div>
  );
};

export default Cart;

/* <div>
        El cart es{" "}
        {cart.map((item, index) => {
          return (
          <div key={index}>
            <h1> {item.name} </h1>
          </div>)
        })}
      </div> */
