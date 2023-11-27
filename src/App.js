import React from "react";
import Note from "./Note";
import notesData from "./Notes";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Notes (Header)</h1>
      </header>
      <main className="main">
        {notesData.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </main>
      <footer className="footer">
        <h1>Notes (Footer)</h1>
      </footer>
    </div>
  );
};

export default App;
