import AT from "./actionTypes";

export const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return {
        type: AT.LOAD_NOTES,
        notes
    };
};

export const clearNotes = () => ({
    type: AT.DELETE_NOTES
});

export const createNote = note => ({
    type: AT.CREATE_NOTE,
    note
});

export const updateNote = note => ({
    type: AT.UPDATE_NOTE,
    note
});

export const deleteNote = id => ({
    type: AT.DELETE_NOTE,
    id
});

export const openDialog = (isEditMode = false, note = {}) => ({
    type: AT.OPEN_DIALOG,
    isEditMode,
    note
});

export const closeDialog = _ => ({
    type: AT.CLOSE_DIALOG
});

export const searchNote = search => ({
    type: AT.SEARCH,
    search
});
