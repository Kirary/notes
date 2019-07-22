import React, { useContext } from "react";
import Note from "./Note";
import { NotesState } from "./App";
import "./notesContainer.css";

const NotesContainer = () => {
    const state = useContext(NotesState);
    const noteList = state
        ? state.notes.map(note => <Note {...note} key={note.id} />)
        : null;
    return <div className="notes-container">{noteList}</div>;
};

export default NotesContainer;
