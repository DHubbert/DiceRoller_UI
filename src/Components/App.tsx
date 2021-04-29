import React from "react";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  Theme,
  ThemeProvider
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import DiceAppBar from "./DiceAppBar";
import ResultList from "./ResultList";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#bbdefb"
    },
    secondary: {
      light: "#8eacbb",
      main: "#607d8b",
      dark: "#34515e",
      contrastText: "#000000"
    }
  }
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#bbdefb"
    },
    secondary: {
      light: "#8eacbb",
      main: "#607d8b",
      dark: "#34515e",
      contrastText: "#000000"
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DiceAppBar />
              </Grid>
              <Grid item xs={4} style={{ height: "100%" }}>
                <ResultList />
              </Grid>
              <Grid item xs={8}>
                <Card></Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
