import React from "react";
import { Grid, Paper, makeStyles, Button, Typography } from "@material-ui/core";

import AlarmIcon from "@material-ui/icons/Alarm";

import { getTimeFormat, getPenalty } from "../../Utils/utils";

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

function PenaltyClock(props) {
  const classes = useStyles();
  const { time, handleClock, running, penalty } = props;

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
            Penalty Clock
          </Typography>
          <Typography
            className={classes.textCenter}
            variant="h6"
            component="h5"
            gutterBottom
            color="textSecondary"
          >
            {getPenalty(penalty)}
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
          {!running && (
            <Button
              className={classes.centerItem}
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => {
                handleClock(!running);
              }}
            >
              Start
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export { PenaltyClock };
