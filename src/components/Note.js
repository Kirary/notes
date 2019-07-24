import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import { Paper, makeStyles, createStyles, IconButton } from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import { NotesDispatch } from "./App";
import { updateNote, deleteNote, openDialog } from "../reducer/actionCreator";

export const gridAutoRows = 8;

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: `calc(100% - ${theme.spacing(2)}px)`,
            justifySelf: "center",
            marginBottom: theme.spacing(2)
        },
        container: {
            padding: theme.spacing(),
            paddingLeft: theme.spacing(2)
        },
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        visible: {
            opacity: 1,
            transition: "opacity 200ms"
        },
        transparent: {
            opacity: 0.2
        },
        invisible: {
            opacity: 0
        },
        icons: {
            fontSize: 16
        },
        content: {
            whiteSpace: "pre-line"
        }
    })
);

const Note = props => {
    const { id, content } = props;
    const classes = useStyles();
    const [span, setSpan] = useState(undefined);
    const [isMouseOver, setMouseOverStatus] = useState(false);

    const ref = useRef(null);

    const openEditDialog = () => dispatch(openDialog(true, { id, content }));

    useLayoutEffect(() => {
        setSpan(Math.round(ref.current.clientHeight / gridAutoRows) + 3);
    });

    const dispatch = useContext(NotesDispatch);

    const onMouseOver = () => {
        setMouseOverStatus(true);
    };
    const onMouseLeave = () => {
        setMouseOverStatus(false);
    };

    return (
        <Paper
            className={classes.root}
            style={span ? { gridRowEnd: `span ${span}` } : {}}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <div ref={ref} className={classes.container}>
                <div className={classes.header}>
                    <IconButton
                        className={
                            isMouseOver ? classes.visible : classes.invisible
                        }
                        size="small"
                        onClick={openEditDialog}
                        color="primary"
                    >
                        <Edit className={classes.icons} />
                    </IconButton>
                    <IconButton
                        className={
                            isMouseOver ? classes.visible : classes.transparent
                        }
                        size="small"
                        onClick={() => {
                            dispatch(deleteNote(id));
                        }}
                        color="primary"
                    >
                        <Clear className={classes.icons} />
                    </IconButton>
                </div>
                <div className={classes.content}>{content}</div>
            </div>
        </Paper>
    );
};

export default Note;
