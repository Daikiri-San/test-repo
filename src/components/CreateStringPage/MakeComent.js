/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Input, Button, CustomInput } from "reactstrap";

const MakeComent = () => {
  const [textareaInput, setTextareaInput] = useState("Комментарий");
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [isTranslateNeeded, setIsTranslateNeeded] = useState(true);

  const onChangeCheckbox = () => setIsTranslateNeeded(!isTranslateNeeded);
  const onChangeTextareaInput = (value) => setTextareaInput(value);
  const onApplyComent = (value) => {
    if (!value) {
      setTextareaInput("Комментарий");
    }
    setIsTextareaOpen(false);
  };
  const onOpenComent = (e) => {
    e.preventDefault();
    setIsTextareaOpen(true);
  };
  return (
    <div className="string-comment">
      {!isTextareaOpen ? (
        <a href="#" className="string-comment__title" onClick={onOpenComent}>
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
            onClick={() => onApplyComent(textareaInput)}
          >
            Применить
          </Button>
        </div>
      )}
      <CustomInput
        checked={isTranslateNeeded}
        onChange={() => onChangeCheckbox()}
        id="create-comment-isTranslateNeeded"
        type="checkbox"
        label="Строка не требует перевода"
      />
    </div>
  );
};

export default MakeComent;
