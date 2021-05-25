import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import allActions from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  // getting actions
  const {
    allLogActions: { addLogs },
  } = allActions;
  // initializing dispatch
  const dispatch = useDispatch();
  // Getting state values from redux store
  const techList = useSelector((state) => {
    return state.tech;
  });
  const { techs } = techList;
  // onSubmit function after click enter button present at bottom of this code
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter all fields" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLogs(newLog)(dispatch);
    }
    // Clering out fields
    M.toast({ html: `Log was added by ${tech}` });
    setMessage("");
    setAttention(false);
    setTech("");
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      {/* Modal Contents */}
      <div className="modal-content">
        <h4>Enter System Logs</h4>
        {/* input field for getting log message */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              placeholder="Enter Log Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        {/* select option for getting technician name */}
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {techs !== null &&
                techs.map((t, index) => {
                  return (
                    <option value={t.firstName + " " + t.lastName}>
                      {t.firstName + " " + t.lastName}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        {/* Checkbox to select whether particular log needs attention or not */}
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  onChange={() => {
                    setAttention(!attention);
                  }}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
