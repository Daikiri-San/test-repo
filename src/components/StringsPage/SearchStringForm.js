import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";

const selectByOptions = [
  "Идентификатору",
  "something",
  "something2",
  "something3",
];

const selectStringLang = [
  "Русский",
  "Английский",
  "Испансикй",
  "Немецкий",
  "something",
  "something2",
];

const selectNeededTranslate = [
  "Немецкий",
  "Английский",
  "Испансикй",
  "Русский",
  "something1",
  "something2",
];

const SearchStringForm = () => {
  const [textTypeInput, setTextTypeInput] = useState("");
  const [textLangInput, setTextLangInput] = useState("");
  const [selectTypeInput, setSelectTypeInput] = useState(selectByOptions[0]);
  const [selectLangInput, setSelectLangInput] = useState(selectStringLang[0]);
  const [selectLangToTranslate, setSelectLangToTranslate] = useState(
    selectNeededTranslate[0]
  );

  const onChangeTextTypeInput = (value) => setTextTypeInput(value);
  const onChangeTextLangInput = (value) => setTextLangInput(value);
  const onChangeSelectTypeInput = (value) => setSelectTypeInput(value);
  const onChangeSelectLangInput = (value) => setSelectLangInput(value);
  const onChangeSelectLangToTranslate = (value) =>
    setSelectLangToTranslate(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      [selectTypeInput]: textTypeInput,
      [selectLangInput]: textLangInput,
      needTranslate: selectLangToTranslate,
    });
    setTextTypeInput("");
    setTextLangInput("");
  };
  return (
    <div className="search-form">
      <Form>
        <FormGroup row>
          <Col sm={8} md={3} lg={2}>
            <p className="search-form__text">Искать по:</p>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <Input
              className="search-form__select"
              type="select"
              value={selectTypeInput}
              name="search-by"
              id="search-by"
              onChange={({ target: { value } }) =>
                onChangeSelectTypeInput(value)
              }
            >
              {selectByOptions.map((el) => (
                <option key={el} className="search-form__select--option">
                  {el}
                </option>
              ))}
            </Input>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <Input
              className="search-form__input--text"
              type="text"
              value={textTypeInput}
              name="searched-type-text"
              id="searched-type-text"
              onChange={({ target: { value } }) => onChangeTextTypeInput(value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} md={3} lg={2}>
            <p className="search-form__text">строка на языке:</p>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <Input
              className="search-form__select"
              type="select"
              value={selectLangInput}
              name="search-lang"
              id="search-lang"
              onChange={({ target: { value } }) =>
                onChangeSelectLangInput(value)
              }
            >
              {selectStringLang.map((el) => (
                <option key={el} className="search-form__select--option">
                  {el}
                </option>
              ))}
            </Input>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <Input
              className="search-form__input--text"
              type="text"
              value={textLangInput}
              name="searched-lang-text"
              id="searched-lang-text"
              onChange={({ target: { value } }) => onChangeTextLangInput(value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} md={4} lg={3}>
            <p className="search-form__text--squere">Требуется перевод</p>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <Input
              className="search-form__select"
              type="select"
              value={selectLangToTranslate}
              name="needed-translate"
              id="needed-translate"
              onChange={({ target: { value } }) =>
                onChangeSelectLangToTranslate(value)
              }
            >
              {selectNeededTranslate.map((el) => (
                <option key={el} className="search-form__select--option">
                  {el}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col
            sm={{ size: 4, offset: 6 }}
            md={{ size: 3, offset: 8 }}
            lg={{ size: 2, offset: 9 }}
          >
            <Button
              className="search-form__button"
              type="submit"
              color="primary"
              onClick={handleSubmit}
            >
              Найти
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchStringForm;
