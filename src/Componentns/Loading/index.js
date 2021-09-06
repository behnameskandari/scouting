import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  loading: {
    margin: "auto",
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <div data-testid='loading' className={classes.root}>
      <CircularProgress className={classes.loading} />
    </div>
  );
}

export { Loading };
