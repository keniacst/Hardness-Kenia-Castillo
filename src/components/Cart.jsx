import React from "react";
import { Button, CloseButton, Table, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import numberWithDots from "../Utils";
import { BsFillBagFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";

const Cart = ({
  products,
  total,
  emptyCartClickHandler,
  removeItemClickHandler,
}) => {
  return (
    <div className="cart">
      <h1> Cesta de compras </h1>
      {Array.isArray(products) && products.length ? (
        <>
          <Table responsive bordered={false}>
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Valor</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td style={{ width: "12rem" }}>
                      <img
                        src={product.img}
                        style={{ width: "inherit" }}
                        alt="alt"
                      />
                    </td>
                    <td>
                      <Link to={`/item/${product.id}`} className="no-style">
                        {product.name}
                      </Link>
                    </td>
                    <td>$ {numberWithDots(product.price)}</td>
                    <td>{product.quantity}</td>
                    <td>
                      $ {numberWithDots(product.quantity * product.price)}
                    </td>
                    <td>
                      <CloseButton
                        className="close-btn"
                        onClick={() => removeItemClickHandler(product.id)}
                      />
                    </td>
                  </tr>
                );
              })}
              <tr className="total-cart">
                <td colSpan={3}> </td>
                <td> Total </td>
                <td> $ {numberWithDots(total())} </td>
                <td> </td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={emptyCartClickHandler}> EmptyCart </Button>
        </>
      ) : (
        <>
          <div className="empty-cart">
            <BsFillBagFill className="icon" /> Tu carrito está vacío.
          </div>
          <Link to={process.env.PUBLIC_URL}>
            <ToggleButton
              className="back-store"
              variant={"outline-dark"}
              checked={false}
            >
              {" "}
              <FaArrowLeft /> Volver a la tienda{" "}
            </ToggleButton>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
