import { useState } from "react";
import "./App.css";
import Notes from "./components/notes";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [overlapOn, setOverlapOn] = useState(
    JSON.parse(localStorage.getItem("overlap")) || false
  );

  const [note, setNote] = useState("");

  const toggleOverlap = () => {
    setOverlapOn(!overlapOn);
    localStorage.setItem("overlap", JSON.stringify(!overlapOn));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <form
          style={{ display: "flex", alignItems: "center" }}
          action={() => {
            if (note.trim() !== "") {
              setNotes([...notes, { id: notes.length + 1, text: note }]);
              setNote("");
            }
          }}
        >
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
              width: "300px",
              fontSize: "16px",
            }}
            placeholder="Enter your note"
          />
          <button
            onClick={() => {
              if (note.trim() !== "") {
                setNotes([...notes, { id: notes.length + 1, text: note }]);
                setNote("");
              }
            }}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Note
          </button>
          <div style={{ marginLeft: "20px", fontSize: "16px" }}>
            <input
              type="checkbox"
              id="overlap-checkbox"
              checked={overlapOn}
              onChange={toggleOverlap}
              style={{ marginRight: "5px" }}
            />
            <label htmlFor="overlap-checkbox">Overlap</label>
          </div>
        </form>
      </div>
      <Notes notes={notes} setNotes={setNotes} overlapOn={overlapOn} />
    </div>
  );
}

export default App;
