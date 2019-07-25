import React, { useEffect } from "react";
import Header from "./Header";
import reducer from "../reducer";
import NotesContainer from "./NotesContainer";
import NoteDialog from "./NoteDialog";
import { makeStyles, createStyles } from "@material-ui/core";
import { loadNotes } from "../reducer/actionCreator";

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
    selectedNote: null,
    search: ""
};

export const NotesDispatch = React.createContext(null);
export const NotesState = React.createContext(null);

const App = () => {
    const classes = useStyles();
    const [state, dispatch] = React.useReducer(reducer, appInitialState);
    const { isDialogOpen, isEditMode, selectedNote } = state;
    useEffect(() => {
        dispatch(loadNotes());
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state.notes));
    }, [state.notes]);

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
                    note={selectedNote}
                />
            </NotesState.Provider>
        </NotesDispatch.Provider>
    );
};

export default App;
