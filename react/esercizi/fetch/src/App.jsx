import { useState, useEffect } from "react";

import "./styles.css";
import classnames from "classnames";

import NoteEditor from "./NoteEditor";
import Notification from "./Notification";
import MouseTracker from "./MouseTracker";
import Users from "./Users";

export default function App() {
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowNotif(false), 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      <h3>1.Note editor</h3>
      <NoteEditor />
      <hr />
      <h3>2.Notification</h3>
      <Notification show={showNotif} />
      {!showNotif && (
        <button onClick={() => setShowNotif(true)}>Mostra Notifica</button>
      )}
      <hr />
      <h3>3.MouseTracker</h3>
      <MouseTracker />
      <hr />
      <h3>4.Fetch API</h3>
      <Users />
    </div>
  );
}
