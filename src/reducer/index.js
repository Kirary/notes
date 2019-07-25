import AT from "./actionTypes";
import { generateId } from "../utils";

export default function reducer(state, action) {
    switch (action.type) {
        case AT.LOAD_NOTES: {
            const notes = action.notes.map(note => ({
                ...note,
                id: generateId()
            }));
            return {
                ...state,
                notes
            };
        }
        case AT.CREATE_NOTE:
            return {
                ...state,
                notes: [...state.notes, { id: generateId(), ...action.note }]
            };
        case AT.DELETE_NOTE: {
            const filteredNotes = state.notes.filter(
                note => note.id !== action.id
            );
            return { ...state, notes: filteredNotes };
        }
        case AT.UPDATE_NOTE: {
            const notes = [...state.notes];
            const noteIndex = notes.findIndex(
                note => note.id === action.note.id
            );
            notes[noteIndex] = action.note;
            return { ...state, notes };
        }
        case AT.OPEN_DIALOG: {
            const isEditMode = action.isEditMode;
            const selectedNote = action.note;
            return { ...state, isDialogOpen: true, isEditMode, selectedNote };
        }
        case AT.CLOSE_DIALOG:
            return {
                ...state,
                isDialogOpen: false,
                isEditMode: false,
                selectedNote: null
            };
        case AT.SEARCH:
            return { ...state, search: action.search };
        default:
            return state;
    }
}
