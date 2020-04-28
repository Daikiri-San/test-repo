import React, { useState, useRef, useEffect } from "react";
import { CustomInput } from "reactstrap";
import debounce from "lodash.debounce";

// const textareaInitialValue = `<a href="/education/page/rules_8">  A new course<br> "8 Rules of Private Investor" is available</a>`;
// const justForExample = `${indestructibleText(
//   `<a href="/education/page/rules_8">`
// )}A new course ${indestructibleText(
//   `<br>`
// )} "8 Rules of Private Investor" is available ${indestructibleText(`</a>`)}`;
// const indestructibleText = (text) => {
//   return <span className="indestractible-text">{text}</span>;
// };

const StringTranslation = ({ lang, id }) => {
  // const indestructibleText = (text) => {
  //   return <span className="indestractible-text">{text}</span>;
  // };
  const justForExample = () => {
    const container = document.createElement("div");
    const indestractible = (text) => {
      const newTag = document.createElement("span");
      newTag.classList.add("indestractible-text");
      newTag.insertAdjacentText("beforeend", text);
      newTag.style.display = "inline-block";
      newTag.setAttribute("contentEditable", false);
      return container.insertAdjacentElement("beforeend", newTag);
    };
    const destractible = () => {
      const newTag = document.createElement("p");
      newTag.classList.add("destractible-text");
      newTag.insertAdjacentText(
        "beforeend",
        " \xa0\xa0\xa0\xa0\xa0\xa0\xa0   "
      );
      newTag.style.display = "inline-block";
      newTag.setAttribute("contentEditable", true);
      return container.insertAdjacentElement("beforeend", newTag);
    };
    indestractible('  <a href="/education/page/rules_8">  ');
    destractible();
    indestractible("  <br>  ");
    destractible();
    indestractible("  </a>  ");
    return container;
  };

  // const justForExample = `<a href="/education/page/rules_8">  A new course<br> "8 Rules of Private Investor" is available</a>`;
  const [textareaInput, setTextareaInput] = useState("");
  const [isEditingFree, setIsEditingFree] = useState(true);
  const customTextarea = useRef(null);
  const convertedInCodeArea = useRef(null);

  const onChangeTextarea = () => {
    if (!customTextarea.current.textContent) {
      return setTextareaInput("");
    }
    setTextareaInput(customTextarea.current.textContent);
  };
  const onChangeCheckbox = () => setIsEditingFree(!isEditingFree);
  const convertInHtml = () =>
    (convertedInCodeArea.current.innerHTML = textareaInput);

  useEffect(() => {
    const example = justForExample();
    const neededElements = [...example.children];
    neededElements.forEach((el) =>
      customTextarea.current.insertAdjacentElement("beforeend", el)
    );
    convertInHtml();
    return () => (convertedInCodeArea.current.innerHTML = "");
  }, []);

  useEffect(() => {
    convertInHtml();
    return;
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
      <div className="string-translate__textarea--container">
        <ul className="string-translate__textarea--row-num">
          {Array(100)
            .fill(" ")
            .map((_, idx) => (
              <li
                key={idx + 1}
                className="string-translate__textarea--row-item"
              >
                {idx + 1}
              </li>
            ))}
        </ul>
        <div
          ref={customTextarea}
          className="string-translate__textarea"
          onKeyDown={debounce(() => onChangeTextarea(), 500)}
        />
      </div>
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
