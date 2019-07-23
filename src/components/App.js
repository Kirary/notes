import React, { useReducer } from "react";
import Header from "./Header";
import reducer from "../reducer";
import "./App.css";
import NotesContainer from "./NotesContainer";
import NoteDialog from "./NoteDialog";

const appInitialState = {
    notes: [],
    isDialogOpen: false
};

export const NotesDispatch = React.createContext(null);
export const NotesState = React.createContext(null);

const App = () => {
    const [state, dispatch] = useReducer(reducer, appInitialState);

    return (
        <NotesDispatch.Provider value={dispatch}>
            <NotesState.Provider value={state}>
                <div className="app">
                    <Header />
                    <NotesContainer />
                </div>
                <NoteDialog isOpen={state.isDialogOpen} />
            </NotesState.Provider>
        </NotesDispatch.Provider>
    );
};

export default App;
