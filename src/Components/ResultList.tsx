import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  Theme,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary
    }
  })
);

export default function ResultList() {
  const classes = useStyles();
  return (
    <Paper style={{ height: "100%" }} className={classes.paper}>
      <Typography variant="h6">Results</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Hello this is some example text."
            secondary="This is some example secondary text."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="This is some more example text."
            secondary="This is more example secondary text."
          />
        </ListItem>
      </List>
    </Paper>
  );
}
