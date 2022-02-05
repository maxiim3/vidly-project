import React from "react";
import generateArray from "./utils/generateArray";
// pagination.jsx

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if ( pagesCount === 1 ) return null
  const pages = generateArray(pagesCount)

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>))
        }
      </ul>
    </nav>
  );
};

export default Pagination;