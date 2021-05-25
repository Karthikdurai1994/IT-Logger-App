import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../store/action";
import TechnicianListItem from "./TechnicianListItem";

const TechnicianListModal = () => {
  // Getting  actions
  const {
    allTechActions: { getTechnician },
  } = allActions;
  // Getting disptach
  const dispatch = useDispatch();
  // getting states from redux store
  const tech = useSelector((state) => {
    return state.tech;
  });
  const { techs, loading } = tech;
  // using useEffect to call fetch logs
  useEffect(() => {
    getTechnician()(dispatch);
    // eslint-disable-next-line
  }, []);

  // UI
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((t, index) => (
              <TechnicianListItem technician={t} key={index} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnicianListModal;
