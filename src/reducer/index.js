export default function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return { count: action.payload };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}
