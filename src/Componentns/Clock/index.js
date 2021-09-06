import React from "react";
import { Grid, Paper, makeStyles, Button, Typography } from "@material-ui/core";

import AlarmIcon from "@material-ui/icons/Alarm";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import { getTimeFormat, getActiveHalf } from "../../Utils/utils";

const useStyles = makeStyles((theme) => ({
  item: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(3),
  },
  centerItem: {
    margin: "auto",
  },
  textCenter: {
    textAlign: "center",
  },
}));

function Clock(props) {
  const classes = useStyles();
  const { time, handleClock, running, handleHalf } = props;

  const getTime = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    return `${getTimeFormat(minutes)}:${getTimeFormat(seconds)}`;
  };
  

  return (
    <Paper className={classes.item} elevation={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            className={classes.textCenter}
            variant="h5"
            component="h5"
            gutterBottom
          >
            Main Clock
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.textCenter}
            variant="h3"
            component="h3"
            gutterBottom
          >
            <AlarmIcon fontSize="large" />
            {getTime()}
          </Typography>
        </Grid>
        <Grid className={classes.item} item xs={12}>
          <Button
            className={classes.centerItem}
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => {
              handleClock(!running);
            }}
          >
            {running ? "Stop" : "Start"}
          </Button>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                handleHalf(0, 1800);
              }}
              variant={getActiveHalf(0, 1800, time) ? "contained" : "outlined"}
              disabled={running}
              color="primary"
            >
              <QueryBuilderIcon fontSize="small" /> 00:00 - 30:00
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                handleHalf(1800, 3600);
              }}
              disabled={running}
              variant={
                getActiveHalf(1800, 3600, time) ? "contained" : "outlined"
              }
              color="primary"
            >
              <QueryBuilderIcon fontSize="small" /> 30:00 - 60:00
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                handleHalf(3600, 4500);
              }}
              variant={
                getActiveHalf(3600, 4500, time) ? "contained" : "outlined"
              }
              disabled={running}
              color="primary"
            >
              <QueryBuilderIcon fontSize="small" /> 60:00 - 75:00
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                handleHalf(4500, 5400);
              }}
              variant={
                getActiveHalf(4500, 5400, time) ? "contained" : "outlined"
              }
              disabled={running}
              color="primary"
            >
              <QueryBuilderIcon fontSize="small" /> 75:00 - 90:00
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export { Clock };
