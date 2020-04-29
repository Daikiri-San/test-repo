import React, { useRef } from "react";
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
  const table = useRef(null);
  const existStrings = useSelector(({ strings }) => strings.existStrings);
  const elements = `Элементы 1-6 из ${existStrings.length}`;
  const stringsPerPage = existStrings.slice(0, 6);
  const pages =
    existStrings.length / 6 <= 10
      ? Array(Math.ceil(existStrings.length / 6)).fill("el")
      : Array(10).fill("el");
  console.dir(table);
  return (
    <div className="strings-list">
      <Link to={routesPaths.create_string}>
        <Button className="strings-list__button" color="primary">
          Создать строку
        </Button>
      </Link>
      <p className="strings-list__elements">{elements}</p>
      <div className="strings-list__table--container">
        <Table responsive borderless>
          <thead className="strings-list__heading">
            <tr>
              <th>ID</th>
              <th>Идентификатор</th>
              <th>Строка</th>
              <th>Имеющиеся переводы</th>
            </tr>
          </thead>
          <tbody ref={table} className="strings-list__body">
            {stringsPerPage.map(({ id, identifier, string, hasTranslate }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{identifier}</td>
                <td>{string}</td>
                <td>{hasTranslate.join(", ")}</td>
                <td>
                  <Link to={routesPaths.strings}>
                    <i class="fas fa-edit"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Pagination className="strings-list__pagination">
        <PaginationItem>
          <PaginationLink
            className="strings-list__pagination--item"
            first
            href="#"
          />
        </PaginationItem>
        {pages.map((_, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink className="strings-list__pagination--item" href="#">
              {idx + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            className="strings-list__pagination--item"
            last
            href="#"
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default StringsList;
