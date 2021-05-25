import { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechnicianModal from "./components/technician/AddTechnicianModal";
import TechnicianListModal from "./components/technician/TechniciansListModal";
import store from "./store";
import "./App.css";

const App = () => {
  // using useEffect to initialize materialize js
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        {/* Search Bar Component */}
        <SearchBar />
        <div className="container">
          {/* Logs Component */}
          <Logs />
          {/* Add Log Modal Component */}
          <AddLogModal />
          {/* Edit Log Modal Component */}
          <EditLogModal />
          {/* Add Technician Modal Component */}
          <AddTechnicianModal />
          {/* Technicians List Modal Component */}
          <TechnicianListModal />
          {/* Add Button Component */}
          <AddBtn />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
