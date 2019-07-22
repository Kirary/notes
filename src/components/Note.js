import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { NotesDispatch } from "./App";
import AT from "../reducer/actionTypes";

const gridGap = 8;

const Note = ({ header, content, id }) => {
    const [span, setSpan] = useState(undefined);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setSpan(Math.round(ref.current.clientHeight / gridGap) + 2);
    }, []);

    const dispatch = useContext(NotesDispatch);

    return (
        <Paper
            className="note"
            style={span ? { gridRowEnd: `span ${span}` } : {}}
        >
            <div ref={ref} style={{ padding: 8 }}>
                <div>
                    {header}{" "}
                    <span
                        onClick={() => {
                            dispatch({ type: AT.DELETE_NOTE, id });
                        }}
                    >
                        X
                    </span>
                </div>
                <div>{content}</div>
            </div>
        </Paper>
    );
};

export default Note;
