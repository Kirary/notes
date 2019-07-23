import React, { useContext } from "react";
import Note, { gridAutoRows } from "./Note";
import { NotesState } from "./App";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flex: "1 1 auto",
            padding: "16px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gridAutoRows,
            overflowX: "hidden",
            overflowY: "auto"
        }
    })
);

const NotesContainer = () => {
    const classes = useStyles();
    const state = useContext(NotesState);
    const noteList = state
        ? state.notes.map(note => <Note {...note} key={note.id} />)
        : null;
    return <div className={classes.root}>{noteList}</div>;
};

export default NotesContainer;
