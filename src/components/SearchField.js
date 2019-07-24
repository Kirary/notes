import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { NotesDispatch, NotesState } from "./App";
import { searchNote } from "../reducer/actionCreator";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: "30%",
            transition: "width 100ms ease-in-out"
        },
        fullLWidth: {
            width: "100%"
        },
        inputRoot: {
            background: theme.palette.common.white
        },
        input: {
            padding: "8px 16px"
        }
    })
);

const SearchField = () => {
    const classes = useStyles();
    const dispatch = React.useContext(NotesDispatch);
    const state = React.useContext(NotesState);
    const [isSearchFocused, setFocusState] = React.useState(false);
    const onSearchFocus = () => {
        setFocusState(true);
    };
    const onSearchBlur = () => {
        setFocusState(false);
    };

    const onChange = event => {
        dispatch(searchNote(event.target.value));
    };

    return (
        <>
            <TextField
                className={`${classes.root} ${
                    isSearchFocused || state.search ? classes.fullLWidth : ""
                }`}
                autoFocus
                margin="none"
                type="search"
                variant="outlined"
                placeholder="Search"
                value={state.search}
                onChange={onChange}
                onFocus={onSearchFocus}
                onBlur={onSearchBlur}
                InputProps={{
                    classes: {
                        root: classes.inputRoot,
                        input: classes.input
                    }
                }}
            />
        </>
    );
};

export default SearchField;
