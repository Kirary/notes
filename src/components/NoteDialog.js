import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { NotesDispatch } from "./App";
import { closeDialog, createNote, updateNote } from "../reducer/actionCreator";

const NoteDialog = props => {
    const { isOpen, isEditMode, note } = props;
    const dispatch = useContext(NotesDispatch);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (isEditMode) {
            setContent(note.content);
        }
    }, [isOpen, isEditMode, note]);

    const handleClose = () => {
        dispatch(closeDialog());
    };

    const handleChange = event => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        if (isEditMode) {
            dispatch(updateNote({ id: note.id, content }));
        } else {
            dispatch(createNote({ content }));
        }
        dispatch(closeDialog());
        setContent("");
    };

    const title = isEditMode ? "Update note" : "New note";

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent style={{ width: 400 }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    type="text"
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={8}
                    value={content}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoteDialog;
