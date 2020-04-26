import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import routesPaths from "../../routesPaths";

const StringsList = () => {
  const existStrings = useSelector(({ strings }) => strings.existStrings);
  const elements = `Элементы 1-6 из ${existStrings.length}`;
  const stringsPerPage = existStrings.slice(0, 6);
  const pages =
    existStrings.length / 6 <= 10
      ? Array(Math.ceil(existStrings.length / 6)).fill("el")
      : Array(10).fill("el");
  return (
    <div className="strings-list">
      <Link to={routesPaths.create_string}>
        <Button className="strings-list__button" color="primary">
          Создать строку
        </Button>
      </Link>
      <p className="strings-list__elements">{elements}</p>
      <div className="strings-list__table--container">
        <Table className="strings-list__table" borderless>
          <thead className="strings-list__heading">
            <tr>
              <th>ID</th>
              <th>Идентификатор</th>
              <th>Строка</th>
              <th>Имеющиеся переводы</th>
            </tr>
          </thead>
          <tbody className="strings-list__body">
            {stringsPerPage.map(({ id, identifier, string, hasTranslate }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{identifier}</td>
                <td>{string}</td>
                <td>{hasTranslate.join(", ")}</td>
                <td>
                  <Link to={routesPaths.strings}>Редактировать</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Pagination className="strings-list__pagination">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        {pages.map((_, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink href="#">{idx + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default StringsList;
