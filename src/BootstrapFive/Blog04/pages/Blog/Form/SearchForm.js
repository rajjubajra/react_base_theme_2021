import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionSearchForm } from '../Redux/ActionSearchForm';


function SearchForm() {

  const dispatch = useDispatch();
  const query = useSelector(state => state.ReducerSearchForm.query);

  return (
    <>
      {`${query.length < 0 ? 'Please enter search' : ''}`}
      <form className="form-inline w-100 mt-5 mb-5 d-flex justify-content-center">
        <input
          style={{ width: "84%" }}
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Search"
          name="search"
          value={query}
          onChange={(e) => dispatch(ActionSearchForm(e.target.value))}
        />
      </form>
    </>
  )
}

export default SearchForm