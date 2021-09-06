import React from "react";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { axios } from "./config";
import store from "./Redux/store";
import { AppContainer } from "./Layouts";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `#f5f5f5`,
    height: "100vh",
    maxWidth: "100%",
    overflowX: "hidden",
  },
}));

function App() {
  axios.init();
  const classes = useStyles();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className={classes.root}>
          <AppContainer />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
