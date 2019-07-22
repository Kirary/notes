import React, { useReducer } from "react";
import Header from "./Header";
import reducer from "../reducer";
import "./App.css";
import NotesContainer from "./NotesContainer";
import AT from "../reducer/actionTypes";

const generateTestContent = () => {
    const stingsCount = Math.round(Math.random() * 20);
    let generatedString = "";

    for (let s = 0; s < stingsCount; s++) {
        generatedString += Math.round(Math.random() * 10000) + " ";
    }

    return generatedString;
};

const noteList = [];
for (let i = 0; i < 50; i++) {
    const id =
        new Date().getTime().toString(36) +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 10);

    noteList.push({
        id: id.toLocaleUpperCase(),
        header: "test" + i,
        content: "content1 " + i + generateTestContent()
    });
}

const initialState = {
    notes: []
};

export const NotesDispatch = React.createContext(null);
export const NotesState = React.createContext(null);

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NotesDispatch.Provider value={dispatch}>
            <NotesState.Provider value={state}>
                <div className="app">
                    <button
                        onClick={() => {
                            dispatch({
                                type: AT.CREATE_NOTE,
                                note: {
                                    id: "testCreateNote" + new Date().getTime(),
                                    header: "Test",
                                    content:
                                        "test note from dispatch" +
                                        generateTestContent()
                                }
                            });
                        }}
                    >
                        test
                    </button>
                    <Header />
                    <NotesContainer />
                </div>
            </NotesState.Provider>
        </NotesDispatch.Provider>
    );
};
