import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function ActionList() {
  return (
    <Paper style={{ height: "100%" }}>
      <Typography variant="h6">Results</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Hello this is some example text."
            secondary="This is some example secondary text."
          />
        </ListItem>
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
