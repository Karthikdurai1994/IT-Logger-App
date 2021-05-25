import React from "react";
import PropTypes from "prop-types";
import allActions from "../../store/action";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";

const TechnicianListItem = ({ technician: { id, firstName, lastName } }) => {
  // getting actions
  const {
    allTechActions: { deleteTechnician },
  } = allActions;
  // getting disptach
  const dispatch = useDispatch();
  // deleteTechnician function
  const deleteTechnicianOnClick = () => {
    deleteTechnician(id)(dispatch);
    M.toast({ html: "Technician Deleted Successfully" });
  };
  // UI
  return (
    <li className="collection-item">
      <div>
        {firstName + " " + lastName}
        <a href="#!" className="secondary-content">
          <i
            className="material-icons grey-text"
            onClick={deleteTechnicianOnClick}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

// Setting up prop types
TechnicianListItem.propTypes = {
  technician: PropTypes.object.isRequired,
};

export default TechnicianListItem;
