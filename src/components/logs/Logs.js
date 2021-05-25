import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import allActions from "../../store/action";

const Logs = () => {
  // Getting logs state from store using useSelector hook
  const log = useSelector((state) => {
    return state.log;
  });
  const { logs, loading } = log;
  // useDispatch hook
  const dispatch = useDispatch();
  // Getting actions
  const {
    allLogActions: { getLogs },
  } = allActions;
  // using useEffect to call fetch logs
  useEffect(() => {
    getLogs()(dispatch);
    // eslint-disable-next-line
  }, []);
  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show ...</p>
      ) : (
        logs.map((log, index) => <LogItem key={index} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
