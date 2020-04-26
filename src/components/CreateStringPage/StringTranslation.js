import React, { useState, useRef, useEffect } from "react";
import { Input } from "reactstrap";

const StringTranslation = ({ lang }) => {
  const justForExample = ` <a href="/education/page/rules_8">  A new course<br> "8 Rules of Private Investor" is available</a>`;
  const [textareaInput, setTextareaInput] = useState(justForExample);
  const onChangeTextareaInput = (value) => setTextareaInput(value);

  const convertedInCodeArea = useRef(null);

  const convertInHtml = () => {
    return (convertedInCodeArea.current.innerHTML = textareaInput);
  };

  useEffect(() => {
    convertInHtml();
    return () => (convertedInCodeArea.current.innerHTML = "");
  }, [textareaInput]);

  return (
    <div className="string-translate">
      <div className="string-translate__info-container">
        <p className="string-translate__info-container--text">
          Перевод на {lang} (изменено IvanIvanov 2020-03-15 23:50:23)
        </p>
        <p className="string-translate__info-container--info-text">
          Свободное редактирование
        </p>
      </div>
      <Input
        className="string-translate__textarea"
        type="textarea"
        rows="3"
        name="comment-to-string"
        id="comment-to-string"
        value={textareaInput}
        onChange={({ target: { value } }) => onChangeTextareaInput(value)}
      />
      <p className="string-translate__text">Предпросмотр</p>
      <div
        ref={convertedInCodeArea}
        className="string-translate__preview-content"
      ></div>
    </div>
  );
};

export default StringTranslation;
