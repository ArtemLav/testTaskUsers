import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Pagination = ({
  total,
  currentPage,
  setCurrentPage,
  perPage,
}) => {
  const pagesCount = Math.ceil(total / perPage);
  const pagesNumbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <ul className="pagination justify-content-center mt-5">
      <li
        className={classNames('page-item', {
          disabled: currentPage === 1,
        })}
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          type="button"
          className="page-link"
        >
          Previous
        </button>
      </li>

      {pagesNumbers.map(number => (
        <li
          key={number}
          className={classNames('page-item', {
            active: currentPage === number,
          })}
        >
          <button
            onClick={() => setCurrentPage(number)}
            type="button"
            className="page-link"
          >
            {number}
          </button>
        </li>
      ))}

      <li
        className={classNames('page-item', {
          disabled: currentPage === pagesCount,
        })}
      >
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          type="button"
          className="page-link"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
};
