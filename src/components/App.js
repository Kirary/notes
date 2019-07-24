import React from "react";
import Header from "./Header";
import reducer from "../reducer";
import NotesContainer from "./NotesContainer";
import NoteDialog from "./NoteDialog";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            margin: "0 auto",
            background: "#ccddee",
            maxWidth: 980,
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        }
    })
);

const appInitialState = {
    notes: [],
    isDialogOpen: false,
    isEditMode: false,
    editedNote: null,
    search: ""
};

export const NotesDispatch = React.createContext(null);
export const NotesState = React.createContext(null);

const App = () => {
    const classes = useStyles();
    const [state, dispatch] = React.useReducer(reducer, appInitialState);
    const { isDialogOpen, isEditMode, editedNote } = state;

    return (
        <NotesDispatch.Provider value={dispatch}>
            <NotesState.Provider value={state}>
                <div className={classes.root}>
                    <Header />
                    <NotesContainer />
                </div>
                <NoteDialog
                    isOpen={isDialogOpen}
                    isEditMode={isEditMode}
                    note={editedNote}
                />
            </NotesState.Provider>
        </NotesDispatch.Provider>
    );
};

export default App;
