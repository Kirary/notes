import React, { useReducer } from "react";
import Header from "./Header";
import reducer from "../reducer";
import "./App.css";
import NotesContainer from "./NotesContainer";

const noteList = [];
for (let i = 0; i < 40; i++) {
    const stingsCount = Math.round(Math.random() * 10);
    let testString = " ";
    for (let s = 0; s < stingsCount; s++) {
        testString += Math.round(Math.random() * 10000) + " ";
    }

    noteList.push({
        header: "test" + i,
        content: "content1 " + i + testString
    });
}

export const NotesDispatch = React.createContext(null);
export const NotesState = React.createContext(null);

export default () => {
    const [state, dispatch] = useReducer(reducer, { notes: noteList });

    console.log(state);
    return (
        <NotesDispatch.Provider value={dispatch}>
            <NotesState.Provider value={state}>
                <div className="app">
                    <Header />
                    <NotesContainer />
                </div>
            </NotesState.Provider>
        </NotesDispatch.Provider>
    );
};
