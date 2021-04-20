import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div>
      <h1>My Notes</h1>
      <ul>
        {notes.map((notes) => {
          return (
            <li key={notes.id}>
              {notes.message}
              {notes.role}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
