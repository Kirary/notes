import AT from "./actionTypes";

export default function reducer(state, action) {
    switch (action.type) {
        case AT.CREATE_NOTE:
            return { ...state, notes: [...state.notes, action.note] };
        case AT.DELETE_NOTE: {
            debugger;
            const filteredNotes = state.notes.filter(
                note => note.id !== action.id
            );
            return { ...state, notes: filteredNotes };
        }
        default:
            return state;
    }
}
