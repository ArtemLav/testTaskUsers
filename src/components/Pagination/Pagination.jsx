import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({
  total,
  currentPage,
  setCurrentPage,
  perPage,
}) => {
  const pagesCount = Math.ceil(total / perPage);
  const pagesNumbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pagesNumbers.map(number => (
        <button
          type="button"
          className="pagination__button"
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        className="pagination__button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
};
