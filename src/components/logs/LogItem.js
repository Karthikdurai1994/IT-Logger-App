import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import allActions from "../../store/action";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";

const LogItem = ({ log }) => {
  // Getting Actions
  const {
    allLogActions: { deleteLog, setCurrent },
  } = allActions;
  // using useDispatch hook
  const dispatch = useDispatch();
  // Deleting Log
  const deleteLogOnClick = () => {
    deleteLog(log.id)(dispatch);
    M.toast({ html: "Log Deleted Successfully" });
  };
  // editLog function
  const editLog = () => {
    setCurrent(log)(dispatch);
  };

  // UI
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={editLog}
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={deleteLogOnClick}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
