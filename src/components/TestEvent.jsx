import { Button } from "react-bootstrap";
import React, { useState } from "react";

const TestEvent = () => {
  const [checkForm, setcheckForm] = useState(false);

  const validateEmail = (event) => {
    setcheckForm(
      String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  return (
    <div>
      <input type="email" placeholder="" onInput={validateEmail} />
      <b>{checkForm ? "Datos correctos" : "Datos invalidos"} </b>
    </div>
  );
};

export default TestEvent;
