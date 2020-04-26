/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Input, Button } from "reactstrap";

const MakeIdentifer = () => {
  const [textareaInput, setTextareaInput] = useState("Идентификатор");
  const onChangeTextareaInput = (value) => setTextareaInput(value);
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const onApplyIdentifier = (value) => {
    if (!value) {
      setTextareaInput("Идентификатор");
    }
    setIsTextareaOpen(false);
  };
  const onOpenIdentifier = (e) => {
    e.preventDefault();
    setIsTextareaOpen(true);
  };
  return (
    <div className="string-identifier">
      {!isTextareaOpen ? (
        <a
          href="#"
          className="string-comment__title"
          onClick={onOpenIdentifier}
        >
          {textareaInput}
        </a>
      ) : (
        <div className="string-comment__container">
          <Input
            className="string-comment__textarea"
            type="textarea"
            name="comment-to-string"
            id="comment-to-string"
            value={textareaInput}
            onChange={({ target: { value } }) => onChangeTextareaInput(value)}
          />
          <Button
            className="string-comment__button"
            color="link"
            onClick={() => onApplyIdentifier(textareaInput)}
          >
            Применить
          </Button>
        </div>
      )}
      <p className="string-comment__info">Строка не требует перевода</p>
    </div>
  );
};

export default MakeIdentifer;
