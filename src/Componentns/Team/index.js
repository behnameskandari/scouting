import React from "react";
import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  Button,
  Typography,
  Switch,
} from "@material-ui/core";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";

const useStyles = makeStyles((theme) => ({
  item: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(3),
  },
  title: {
    fontSize: 20,
  },
}));

function Team(props) {
  const { team, handleData, data, penalty, handlePenalty, runningPenalty } =
    props;
  const classes = useStyles();

  const inScore = () => {
    handleData({
      ...data,
      data: {
        ...data.data,
        score: {
          ...data.data.score,
          [`score${team}`]: parseInt(data.data.score[`score${team}`]) + 1,
        },
      },
    });
  };
  const deScore = () => {
    if (data.data.score[`score${team}`] > 0)
      handleData({
        ...data,
        data: {
          ...data.data,
          score: {
            ...data.data.score,
            [`score${team}`]: data.data.score[`score${team}`] - 1,
          },
        },
      });
  };

  const handleChangeScore = (e) => {
    handleData({
      ...data,
      data: {
        ...data.data,
        score: {
          ...data.data.score,
          [`score${team}`]: e.target.value,
        },
      },
    });
  };

  const handleEmptyGoal = (e) => {
    const type = team === "Home" ? 1 : 2;
    const index = data.data.emptyGoal.findIndex((x) => x.type === type);
    const newData = data;
    newData.data.emptyGoal[index] = {
      type,
      active: e.target.checked ? 1 : 0,
    };
    handleData({
      ...newData,
    });
  };

  const handleTimeout = (e) => {
    const type = team === "Home" ? 1 : 2;
    const index = data.data.teamTimeout.findIndex((x) => x.type === type);
    let newData = data;
    newData.data.teamTimeout[index] = {
      type,
      active: e.target.checked ? 1 : 0,
    };
    handleData({
      ...newData,
    });
  };

  const handlePenaltyButton = (home, away) => {
    if (team === "Home") {
      if (penalty === home) {
        handlePenalty(0);
      } else {
        handlePenalty(home);
      }
    } else {
      if (penalty === away) {
        handlePenalty(0);
      } else {
        handlePenalty(away);
      }
    }
  };
  return (
    <Paper className={classes.item} elevation={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" gutterBottom>
            {team} Team
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={deScore}>
            <ExpandMoreIcon fontSize="large" color="primary" />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Score"
            placeholder={`Enter ${team} Team Score`}
            fullWidth
            type="number"
            onChange={handleChangeScore}
            variant="outlined"
            value={data.data.score[`score${team}`]}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={inScore}>
            <ExpandLessIcon fontSize="large" color="primary" />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="h6"
            component="h5"
            color="textSecondary"
            gutterBottom
          >
            Empty Goal
          </Typography>
          <Switch
            onChange={handleEmptyGoal}
            color="primary"
            name="emptyGoalHome"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            component="h5"
            color="textSecondary"
            gutterBottom
          >
            Timeout
          </Typography>
          <Switch
            onChange={handleTimeout}
            color="primary"
            name="timeouteHome"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h5"
            color="textSecondary"
            gutterBottom
          >
            Penalties
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  handlePenaltyButton(1, 4);
                }}
                disabled={runningPenalty}
                variant={
                  (penalty === 1 && team === "Home") ||
                  (penalty === 4 && team === "Away")
                    ? "contained"
                    : "outlined"
                }
                color="primary"
              >
                <SportsHandballIcon fontSize="small" /> First Penalty
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  handlePenaltyButton(2, 5);
                }}
                disabled={runningPenalty}
                variant={
                  (penalty === 2 && team === "Home") ||
                  (penalty === 5 && team === "Away")
                    ? "contained"
                    : "outlined"
                }
                color="primary"
              >
                <SportsHandballIcon fontSize="small" /> Second Penalty
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  handlePenaltyButton(3, 6);
                }}
                disabled={runningPenalty}
                variant={
                  (penalty === 3 && team === "Home") ||
                  (penalty === 6 && team === "Away")
                    ? "contained"
                    : "outlined"
                }
                color="primary"
              >
                <SportsHandballIcon fontSize="small" /> Third Penalty
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export { Team };
