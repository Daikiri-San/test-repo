import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../redux/pageTitle";
import SearchStringForm from "../../components/StringsPage/SearchStringForm";
import StringsList from "../../components/StringsPage/StringsList";

function StringsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(changeTitle("Строки")), 10);
    return () => dispatch(changeTitle(""));
  }, [dispatch]);

  return (
    <>
      <SearchStringForm />
      <StringsList />
    </>
  );
}

export default StringsPage;
