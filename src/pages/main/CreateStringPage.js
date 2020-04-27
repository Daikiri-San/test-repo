import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pageTitle";
import { Button } from "reactstrap";
import MakeComent from "../../components/CreateStringPage/MakeComent";
import MakeIdentifier from "../../components/CreateStringPage/MakeIdentifier";
import StringTranslation from "../../components/CreateStringPage/StringTranslation";

function CreateStringPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(changeTitle("Создать строку")), 10);
    return () => dispatch(changeTitle(""));
  }, [dispatch]);

  return (
    <div className="make-string">
      <MakeComent />
      <MakeIdentifier />
      <StringTranslation lang="Русский" id="ru" />
      <StringTranslation lang="Английский" id="eng" />
      <Button className="make-string__button" color="primary">
        Сохранить
      </Button>
    </div>
  );
}

export default CreateStringPage;
