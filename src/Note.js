import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>Created on: {note.createdDate.toLocaleString()}</p>
      {note.image && <img src={note.image} alt="Note" style={{maxWidth: '100%'}}/>}
    </div>
  );
};

export default Note;
