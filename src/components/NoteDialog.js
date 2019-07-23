import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { NotesDispatch } from "./App";
import { closeDialog, createNote } from "../reducer/actionCreator";

const NoteDialog = props => {
    const { isOpen } = props;
    const dispatch = React.useContext(NotesDispatch);
    const [content, setContent] = React.useState("");

    const handleClose = () => {
        dispatch(closeDialog());
    };

    const handleChange = event => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        dispatch(createNote({ content }));
        dispatch(closeDialog());
        setContent("");
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>New note</DialogTitle>
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
