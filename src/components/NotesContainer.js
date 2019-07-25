import React from "react";
import Note, { gridAutoRows } from "./Note";
import { NotesState } from "./App";
import { makeStyles, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flex: "1 1 auto",
            padding: "16px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gridAutoRows,
            overflowX: "hidden",
            overflowY: "auto",
            position: "relative"
        },
        message: {
            position: "absolute",
            top: "10%",
            width: "100%"
        }
    })
);

const NotesContainer = () => {
    const classes = useStyles();
    const state = React.useContext(NotesState);
    const { notes, search } = state;
    const noteList = notes
        .filter(
            note => note.content.includes(search) || note.tags.includes(search)
        )
        .map(note => <Note note={note} key={note.id} />);

    const message = (
        <Typography
            align="center"
            variant="overline"
            className={classes.message}
        >
            {notes.length === 0 ? "Add you notes" : "Nothing found"}
        </Typography>
    );

    return (
        <div className={classes.root}>
            {noteList.length === 0 ? message : noteList}
        </div>
    );
};

export default NotesContainer;
