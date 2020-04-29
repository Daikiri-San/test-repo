import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  CustomInput,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
  const [isTranslateNeeded, setIsTranslateNeeded] = useState(false);
  const [isSearchByOpen, setIsSearchByOpen] = useState(false);
  const [isSearchOnLangOpen, setIsSearchOnLangOpen] = useState(false);
  const [isTranslateNeededOpen, setIsTranslateNeededOpen] = useState(false);
  const [selectTypeInput, setSelectTypeInput] = useState(selectByOptions[0]);
  const [selectLangInput, setSelectLangInput] = useState(selectStringLang[0]);
  const [selectLangToTranslate, setSelectLangToTranslate] = useState(
    selectNeededTranslate[0]
  );

  const onChangeIsIsSearchByOpen = () =>
    setIsSearchByOpen((prevState) => !prevState);
  const onChangeIsSearchOnLangOpen = () =>
    setIsSearchOnLangOpen((prevState) => !prevState);
  const onChangeIsTranslateNeededOpen = () =>
    setIsTranslateNeededOpen((prevState) => !prevState);

  const onChangeCheckbox = () => setIsTranslateNeeded(!isTranslateNeeded);
  const onChangeTextTypeInput = (value) => setTextTypeInput(value);
  const onChangeTextLangInput = (value) => setTextLangInput(value);
  const onChangeSelectTypeInput = (value) => setSelectTypeInput(value);
  const onChangeSelectLangInput = (value) => setSelectLangInput(value);
  const onChangeSelectLangToTranslate = (value) =>
    setSelectLangToTranslate(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTranslateNeeded) {
      console.log({
        [selectTypeInput]: textTypeInput,
        [selectLangInput]: textLangInput,
      });
      setTextTypeInput("");
      return setTextLangInput("");
    }
    console.log({
      [selectTypeInput]: textTypeInput,
      [selectLangInput]: textLangInput,
      needTranslate: selectLangToTranslate,
    });
    setTextTypeInput("");
    return setTextLangInput("");
  };
  return (
    <div className="search-form">
      <Form>
        <FormGroup row>
          <Col sm={8} md={3}>
            <p className="search-form__text">Искать по:</p>
          </Col>
          <Col sm={8} md={4} lg={3} className="search-form__select">
            <ButtonDropdown
              className="search-form__select--button"
              isOpen={isSearchByOpen}
              toggle={onChangeIsIsSearchByOpen}
            >
              <DropdownToggle caret className="search-form__select--text">
                {selectTypeInput}
                <i className="fas fa-angle-down"></i>
              </DropdownToggle>
              <DropdownMenu className="search-form__select--menu">
                {selectByOptions.map((el) => (
                  <DropdownItem
                    key={el}
                    onClick={() => onChangeSelectTypeInput(el)}
                  >
                    {el}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
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
          <Col sm={8} md={3}>
            <p className="search-form__text">Строка на языке:</p>
          </Col>
          <Col sm={8} md={4} lg={3}>
            <ButtonDropdown
              className="search-form__select--button"
              isOpen={isSearchOnLangOpen}
              toggle={onChangeIsSearchOnLangOpen}
            >
              <DropdownToggle caret className="search-form__select--text">
                {selectLangInput}
                <i className="fas fa-angle-down"></i>
              </DropdownToggle>
              <DropdownMenu className="search-form__select--menu">
                {selectStringLang.map((el) => (
                  <DropdownItem
                    key={el}
                    onClick={() => onChangeSelectLangInput(el)}
                  >
                    {el}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
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
          <Col sm={8} md={3}>
            <CustomInput
              className="search-form__input--checkbox"
              checked={isTranslateNeeded}
              onChange={() => onChangeCheckbox()}
              id="search-isTranslateNeeded"
              type="checkbox"
              label="Требуется перевод"
            />
          </Col>
          <Col sm={8} md={4} lg={3}>
            <ButtonDropdown
              className="search-form__select--button"
              isOpen={isTranslateNeededOpen}
              toggle={onChangeIsTranslateNeededOpen}
            >
              <DropdownToggle caret className="search-form__select--text">
                {selectLangToTranslate}
                <i className="fas fa-angle-down"></i>
              </DropdownToggle>
              <DropdownMenu className="search-form__select--menu">
                {selectNeededTranslate.map((el) => (
                  <DropdownItem
                    key={el}
                    onClick={() => onChangeSelectLangToTranslate(el)}
                  >
                    {el}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col
            sm={{ size: 4, offset: 6 }}
            md={{ size: 3, offset: 8 }}
            lg={{ size: 2, offset: 9 }}
          >
            <Button type="submit" color="primary" onClick={handleSubmit}>
              Найти
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchStringForm;
