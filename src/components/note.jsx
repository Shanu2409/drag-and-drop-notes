/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";
import { IoTrashBin } from "react-icons/io5";

const Note = forwardRef(
  ({ id, content, initialPos, setNotes, ...props }, ref) => {
    const handleremoveNote = (idd) => {
      // from localstore remove the note with id as idd
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const updatedNotes = notes.filter((note) => note.id !== idd);
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      // alert(idd);
    };

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: `${initialPos?.x}px`,
          top: `${initialPos?.y}px`,
          border: "1px solid black",
          userSelect: "none",
          padding: "10px",
          width: "200px",
          cursor: "move",
          backgroundColor: "lightyellow",
        }}
        {...props}
      >
        <div style={styles.container}>
          <IoTrashBin
            style={styles.icon}
            onClick={() => handleremoveNote(id)}
          />
          <div style={styles.content}>{content}</div>
        </div>
      </div>
    );
  }
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: "20px",
    color: "#ff6347", // Red color for trash bin icon
    marginRight: "10px",
    cursor: "pointer",
  },
  content: {
    flex: "1",
    fontSize: "16px",
    color: "#333", // Black color for content text
  },
};

export default Note;
