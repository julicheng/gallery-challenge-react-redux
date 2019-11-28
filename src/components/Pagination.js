import React from "react";
import { connect } from "react-redux";
import { store } from "../App";
import { setCurrentPage, setPaginatedItems } from "../actions";

const Pagination = props => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      store.getState().items.filteredItems.length /
        store.getState().pagination.itemsPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={() => props.handlePageClick(number)}
              href="/#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    filteredItems: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePageClick: page => {
      dispatch(setCurrentPage(page));
      dispatch(setPaginatedItems());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
