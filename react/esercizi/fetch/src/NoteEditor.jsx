import { useState, useEffect } from "react";
export default function NoteEditor() {
  const [note, setNote] = useState("");
  function handleChange(e) {
    setNote(e.target.value);
    localStorage.setItem("note", note);
  }
  function handleDelete() {
    setNote("");
    localStorage.setItem("note", "");
  }
  useEffect(() => {
    if (localStorage.getItem("note")) {
      setNote(localStorage, getItem("note"));
    }
  }, []);
  return (
    <div>
      {" "}
      <textarea
        rows="12"
        onChange={handleChange}
        value={note}
        placeholder="Scrivi la tua nota"
      ></textarea>{" "}
      <button onClick={handleDelete}>Cancella la nota</button>{" "}
    </div>
  );
}
