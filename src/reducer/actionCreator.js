import AT from "./actionTypes";

export const loadNotes = () => ({
    type: AT.LOAD_NOTES
});

export const clearNotes = () => ({
    type: AT.DELETE_NOTES
});

export const createNote = ({ content }) => ({
    type: AT.CREATE_NOTE,
    note: {
        content
    }
});

export const updateNote = ({ id, content }) => ({
    type: AT.UPDATE_NOTE,
    note: {
        id,
        content
    }
});

export const deleteNote = id => ({
    type: AT.DELETE_NOTE,
    id
});

export const openDialog = _ => ({
    type: AT.OPEN_DIALOG
});

export const closeDialog = _ => ({
    type: AT.CLOSE_DIALOG
});
