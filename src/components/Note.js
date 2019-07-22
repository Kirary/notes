import React, { useState, useRef, useLayoutEffect } from "react";
import Paper from "@material-ui/core/Paper";

const gridGap = 16;

const Note = ({ header, content }) => {
    const [span, setSpan] = useState(undefined);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setSpan(Math.round(ref.current.clientHeight / gridGap) + 1);
    });
    return (
        <div
            className="note"
            style={span ? { gridRowEnd: `span ${span}` } : {}}
        >
            <Paper ref={ref} style={{ padding: 8 }}>
                <div>{header}</div>
                <div>{content}</div>
            </Paper>
        </div>
    );
};

export default Note;
