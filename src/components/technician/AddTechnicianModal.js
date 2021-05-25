import React, { useState } from "react";
import allActions from "../../store/action";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";

const AddTechnicianModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Getting actions
  const {
    allTechActions: { addTechnician },
  } = allActions;
  // getting disptach from useDisptach hook
  const dispatch = useDispatch();
  // onSubmit function after click enter button present at bottom of this code
  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter all fields" });
    } else {
      const newTechnician = {
        firstName,
        lastName,
      };
      addTechnician(newTechnician)(dispatch);
      M.toast({ html: `${firstName} ${lastName} was added as Technician` });
    }
    // Clering out fields
    setFirstName("");
    setLastName("");
  };

  return (
    <div id="add-tech-modal" className="modal">
      {/* Modal Contents */}
      <div className="modal-content">
        <h4>Add Technician</h4>
        {/* input field for getting first name */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
        </div>
        {/* input field for getting last name */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* Modal Footer */}
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechnicianModal;
