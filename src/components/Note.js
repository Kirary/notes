import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import {
    Paper,
    makeStyles,
    createStyles,
    IconButton,
    Chip,
    ClickAwayListener,
    Button
} from "@material-ui/core";
import Delete from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import { NotesDispatch } from "./App";
import { deleteNote, openDialog, searchNote } from "../reducer/actionCreator";

export const gridAutoRows = 8;

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: `calc(100% - ${theme.spacing(2)}px)`,
            justifySelf: "center",
            marginBottom: theme.spacing(2)
        },
        container: {
            padding: `${theme.spacing()}px ${theme.spacing(2)}px`,
            position: "relative"
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
        },
        chip: {
            margin: theme.spacing(0.5),
            marginBottom: 0
        },
        deleteDialog: {
            boxSizing: "border-box",
            margin: theme.spacing(0.5),
            padding: theme.spacing(),
            position: "absolute",
            top: 0,
            left: 0,
            background: theme.palette.common.white,
            width: `calc(100% - ${theme.spacing(2)}px)`,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    })
);

const Note = props => {
    const { note } = props;
    const { title, content, tags = "" } = note;
    const classes = useStyles();
    const [span, setSpan] = useState(undefined);
    const [isDialogShown, setDialogVisibility] = useState(false);
    const [isMouseOver, setMouseOverStatus] = useState(false);

    const ref = useRef(null);

    const openEditDialog = () => dispatch(openDialog(true, note));
    const onOpenDeleteDialog = () => {
        setDialogVisibility(true);
    };

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

    const closeDeleteDialog = () => {
        setDialogVisibility(false);
    };

    const onDeleteNote = () => {
        dispatch(deleteNote(note.id));
    };

    const searchByTag = tag => () => dispatch(searchNote(tag));

    const renderDeleteDialog = () =>
        isDialogShown ? (
            <ClickAwayListener onClickAway={closeDeleteDialog}>
                <div className={classes.deleteDialog}>
                    <div>Delete this Note?</div>
                    <div>
                        <Button
                            color="secondary"
                            size="small"
                            onClick={onDeleteNote}
                        >
                            confirm
                        </Button>
                        <Button size="small" onClick={closeDeleteDialog}>
                            cancel
                        </Button>
                    </div>
                </div>
            </ClickAwayListener>
        ) : null;

    const renderTags = () => {
        return tags
            .split(",")
            .map(tag => tag.trim())
            .filter(tag => tag)
            .map(tag => (
                <Chip
                    size="small"
                    label={tag}
                    className={classes.chip}
                    onClick={searchByTag(tag)}
                />
            ));
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
                        onClick={onOpenDeleteDialog}
                        color="primary"
                    >
                        <Delete className={classes.icons} />
                    </IconButton>
                    {renderDeleteDialog()}
                </div>
                <div className={classes.content}>{content}</div>
                {renderTags()}
            </div>
        </Paper>
    );
};

export default Note;
