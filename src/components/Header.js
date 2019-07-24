import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Plus from "@material-ui/icons/Add";
import { makeStyles, createStyles } from "@material-ui/core";
import { NotesDispatch } from "./App";
import { openDialog } from "../reducer/actionCreator";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            background: "#eff6fc",
            height: 50,
            display: "flex",
            flexDirection: "row-reverse",
            flex: "none",
            padding: theme.spacing()
        }
    })
);

const Header = () => {
    const classes = useStyles();
    const dispatch = React.useContext(NotesDispatch);

    const openNoteDialog = () => dispatch(openDialog());

    return (
        <div className={classes.root}>
            <IconButton onClick={openNoteDialog}>
                <Plus />
            </IconButton>
        </div>
    );
};

export default Header;
