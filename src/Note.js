import React from "react";

const Note = ({ note }) => {
  const handleNoteClick = () => {
    alert(`Note Clicked!\nTitle: ${note.title}\nCreated on: ${note.createdDate.toLocaleString()}`);
  };

  return (
    <div className="note" onClick={handleNoteClick}>
      <p>{note.content}</p>
      {note.image && <img src={note.image} alt="Note" style={{maxWidth: '100%'}}/>}
    </div>
  );
};

export default Note;
