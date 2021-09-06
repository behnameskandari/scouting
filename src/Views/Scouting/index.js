import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

import { Entity } from "../../Models";
import { Clock, PenaltyClock, Team } from "../../Componentns";
import { updateHalf } from "../../Utils/utils";

import { ScoutingApi } from "../../Apis";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  item: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20,
  },
}));
export default function Scouting() {
  const classes = useStyles();
  const history = useHistory();

  const { matchId } = useSelector((state) => state.match);

  const [timeFrom, setTimeFrom] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [penaltyTime, setPnaltyTime] = useState(120);
  const [timeToReq, setTimeToreq] = useState(0);
  const [timeTo, setTimeTo] = useState(1800);

  const [data, setData] = useState(new Entity(matchId));

  const [running, isRunning] = useState(false);
  const [runningPenalty, isRunningPenalty] = useState(false);

  const submitData = () => {
    const dateTime = format(new Date(), "dd-MM-yyyy hh:mm:ss.T");

    let Penalties = data.data.penalties;
    const index = Penalties.findIndex((x) => x.type === penalty);
    Penalties[index] = {
      ...Penalties[index],
      active: runningPenalty ? 1 : 0,
      running: runningPenalty ? 1 : 0,
      seconds: penaltyTime,
      limit: 0,
    };
    ScoutingApi.postData({
      ...data,
      timestamp: dateTime,
      data: {
        ...data.data,
        mainClock: {
          ...data.data.mainClock,
          seconds: timeFrom,
          limit: timeTo,
          running: running ? 1 : 0,
        },
        penalties: Penalties,
      },
    }).then(({ error, response }) => {
      console.log(response);
    });
  };

  useEffect(() => {
    submitData();
  }, [data]);

  useEffect(() => {
    const interValReq = setInterval(() => {
      submitData();
    }, 2000);
    return () => clearInterval(interValReq);
  }, [timeFrom, data, penaltyTime, runningPenalty, penalty]);

  useEffect(() => {
    if (matchId === "") history.push("/");
    if (timeFrom <= timeTo && running) {
      if (timeFrom === timeTo) {
        isRunning(false);
        updateHalf(timeFrom, setTimeTo);
      }
      const intervalId = setInterval(() => {
        setTimeFrom(timeFrom + 1);
        setTimeToreq(timeToReq + 1);
        if (timeToReq === 1) {
          setTimeToreq(0);
          submitData();
        }

        if (runningPenalty) {
          setPnaltyTime(penaltyTime - 1);
        }
        if (penaltyTime === 0) {
          setPnaltyTime(120);
          isRunningPenalty(false);
          setPenalty(0);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [
    timeFrom,
    running,
    timeTo,
    timeToReq,
    penaltyTime,
    runningPenalty,
    penalty,
  ]);

  const handleHalf = (start, end) => {
    setTimeFrom(start);
    setTimeTo(end);
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography
          className={classes.title}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Scouting Match ID {matchId}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Team
          penalty={penalty}
          handlePenalty={setPenalty}
          handleData={setData}
          data={data}
          team="Home"
          runningPenalty={runningPenalty}
        />
      </Grid>

      <Grid spacing={2} item container xs={4}>
        <Grid item xs={12}>
          <Clock
            time={timeFrom}
            running={running}
            handleClock={isRunning}
            handleHalf={handleHalf}
          />
        </Grid>
        {penalty !== 0 && running && (
          <Grid item xs={12}>
            <PenaltyClock
              time={penaltyTime}
              running={runningPenalty}
              handleClock={isRunningPenalty}
              penalty={penalty}
            />
          </Grid>
        )}
      </Grid>

      <Grid item xs={4}>
        <Team
          penalty={penalty}
          handlePenalty={setPenalty}
          handleData={setData}
          data={data}
          runningPenalty={runningPenalty}
          team="Away"
        />
      </Grid>
    </Grid>
  );
}
