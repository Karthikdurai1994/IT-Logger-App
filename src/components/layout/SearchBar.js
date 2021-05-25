import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../store/action";

const SearchBar = () => {
  // creating reference for input search
  const searchRef = useRef();
  // getting actions
  const {
    allLogActions: { searchLogs },
  } = allActions;
  // Getting disptach from useDispatch hook
  const dispatch = useDispatch();
  // handling changes when typed of search text field
  const handleSearchFieldChange = () => {
    searchLogs(searchRef.current.value)(dispatch);
  };
  // UI
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={searchRef}
              onChange={handleSearchFieldChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
