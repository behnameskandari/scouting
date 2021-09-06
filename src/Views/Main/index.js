import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  TextField,
  FormControl,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { updateMatchID } from "../../Redux/scouting/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "100vh",
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(3),
  },
  title: {
    fontSize: 20,
    margin: "10px auto",
    textAlign: "center",
  },
}));
export default function Main() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const [mId, setMID] = useState("");
  const [error, hasError] = useState(false);

  const startScouting = () => {
    const reg = new RegExp("^[0-9]{8}$");
    if (reg.test(mId)) {
      hasError(false);
      dispatch(updateMatchID(mId));
      history.push("/scouting");
    } else {
      hasError(true);
    }
  };

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title} gutterBottom>
              Enter Match ID to Start Scouting
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <TextField
                error={error}
                label="Match ID"
                helperText={error && "Please enter a valid Match ID"}
                variant="outlined"
                id="match-id"
                onChange={(e) => {
                  setMID(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={startScouting} variant="contained" color="primary">
              Start Scouting
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
