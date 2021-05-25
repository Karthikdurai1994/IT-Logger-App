import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../store/action";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  // Getting actions
  const {
    allLogActions: { updateLog },
  } = allActions;
  // getting redux state value --> log
  const log = useSelector((state) => {
    return state.log;
  });
  const { current } = log;
  // Getting redux state value - tech
  const techList = useSelector((state) => {
    return state.tech;
  });
  const { techs } = techList;
  // Getting dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    if (current !== null) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);
  // onSubmit function after click enter button present at bottom of this code
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter all fields" });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };
      updateLog(updatedLog)(dispatch);
      M.toast({ html: "Log has been updated successfully" });
    }
    // Clering out fields
    setMessage("");
    setAttention(false);
    setTech("");
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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

export default EditLogModal;
