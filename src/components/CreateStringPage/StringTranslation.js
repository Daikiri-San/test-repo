import React, { useState, useRef, useEffect } from "react";
import { Input, CustomInput } from "reactstrap";

// const textareaInitialValue = <a href="/education/page/rules_8">  A new course<br> "8 Rules of Private Investor" is available</a>`;
// const justForExample = `${indestructibleText(
//   `<a href="/education/page/rules_8">`
// )}A new course ${indestructibleText(
//   `<br>`
// )} "8 Rules of Private Investor" is available ${indestructibleText(`</a>`)}`;
// const indestructibleText = (text) => {
//   return <span className="indestractible-text">{text}</span>;
// };

const StringTranslation = ({ lang, id }) => {
  const justForExample = `<a href="/education/page/rules_8">  A new course<br> "8 Rules of Private Investor" is available</a>`;
  const [textareaInput, setTextareaInput] = useState(justForExample);
  const [isEditingFree, setIsEditingFree] = useState(true);
  const convertedInCodeArea = useRef(null);

  const onChangeTextareaInput = (value) => setTextareaInput(value);
  const onChangeCheckbox = () => setIsEditingFree(!isEditingFree);
  const convertInHtml = () => {
    console.dir(textareaInput);

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
        <CustomInput
          className="string-translate__checkbox"
          checked={isEditingFree}
          onChange={() => onChangeCheckbox()}
          id={`free-editing-${id}`}
          type="checkbox"
          label="Свободное редактирование"
        />
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

/* <ol className="string-translate__textarea--row-num">
{Array(100)
  .fill(" ")
  .map((_, idx) => (
    <li key={idx + 1}></li>
  ))}
</ol> */

export default StringTranslation;
