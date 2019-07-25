import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Plus from "@material-ui/icons/Add";
import { makeStyles, createStyles } from "@material-ui/core";
import { NotesDispatch } from "./App";
import { openDialog } from "../reducer/actionCreator";
import SearchField from "./SearchField";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            background: "#eff6fc",
            height: 50,
            display: "flex",
            flexDirection: "row-reverse",
            flex: "none",
            alignItems: "center",
            padding: theme.spacing(),
            paddingLeft: theme.spacing(4)
        },
        rightBlock: {
            flex: "none"
        }
    })
);

const Header = () => {
    const classes = useStyles();
    const dispatch = React.useContext(NotesDispatch);

    const openNoteDialog = () => dispatch(openDialog());

    return (
        <div className={classes.root}>
            <IconButton onClick={openNoteDialog} className={classes.rightBlock}>
                <Plus />
            </IconButton>
            <SearchField />
        </div>
    );
};

export default Header;
