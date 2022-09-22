import React from "react";
import { Table } from "react-bootstrap";
import numberWithDots from "../Utils";

const Cart = ({ products, total }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Valor</th>
            <th>Cantidad</th>
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
              </tr>
            );
          })}
          <tr>
            <td> </td>
            <td> Total</td>
            <td>$ {numberWithDots(total())}</td>
            <td> Total </td>
          </tr>
        </tbody>
      </Table>
    </>
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
