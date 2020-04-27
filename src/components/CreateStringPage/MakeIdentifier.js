/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const MakeIdentifer = () => {
  const [identifier, setIdentifier] = useState("");
  const onChangeIdentifier = (value) => setIdentifier(value);

  useEffect(() => onChangeIdentifier("mobile.wallet.description"), [
    onChangeIdentifier,
  ]);

  return (
    <div className="string-identifier">
      <p className="string-identifier__title">Идентификатор</p>
      <div className="string-comment__container">
        <div className="string-identifier__block">{identifier}</div>
        <Button
          className="string-comment__button"
          color="link"
          onClick={() => onChangeIdentifier(identifier)}
        >
          Применить
        </Button>
      </div>
    </div>
  );
};

export default MakeIdentifer;
