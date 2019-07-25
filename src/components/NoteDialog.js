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
    const [tags, setTags] = useState("");

    useEffect(() => {
        if (isEditMode) {
            setContent(note.content);
            setTags(note.tags);
        }
    }, [isOpen, isEditMode, note]);

    const handleClose = () => {
        dispatch(closeDialog());
        setContent("");
        setTags("");
    };

    const handleContentChange = event => {
        setContent(event.target.value);
    };

    const handleTagsChange = event => {
        setTags(event.target.value);
    };

    const handleSave = () => {
        if (isEditMode) {
            dispatch(updateNote({ id: note.id, content, tags }));
        } else {
            dispatch(createNote({ content, tags }));
        }
        dispatch(closeDialog());
        setContent("");
        setTags("");
    };

    const title = isEditMode ? "Update note" : "New note";

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent style={{ width: 400 }}>
                <TextField
                    autoFocus
                    margin="dense"
                    type="text"
                    label="Note"
                    fullWidth
                    multiline
                    rows={2}
                    rowsMax={8}
                    value={content}
                    onChange={handleContentChange}
                />
                <TextField
                    label="tags"
                    margin="dense"
                    type="text"
                    fullWidth
                    value={tags}
                    onChange={handleTagsChange}
                    placeholder='Split your tags by ","'
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={handleSave}
                    color="primary"
                    disabled={!content}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoteDialog;
