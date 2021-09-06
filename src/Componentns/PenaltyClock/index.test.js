import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { PenaltyClock } from "./index";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render Clock Penalty not started", () => {
  act(() => {
    render(
      <PenaltyClock
        time={120}
        handleClock={() => {}}
        running={false}
        handleHalf={() => {}}
      />,
      container
    );
  });

  expect(container.querySelector(".MuiTypography-h3").textContent).toEqual(
    "02:00"
  );

  expect(
    container.querySelector(".MuiButton-containedSecondary .MuiButton-label")
      .textContent
  ).toEqual("Start");
});

it("should render Clock Penalty  started", () => {
  act(() => {
    render(
      <PenaltyClock
        time={120}
        handleClock={() => {}}
        running={true}
        handleHalf={() => {}}
      />,
      container
    );
  });

  expect(container.querySelector(".MuiTypography-h3").textContent).toEqual(
    "02:00"
  );

  expect(
    container.querySelector(".MuiButton-containedSecondary")
  ).not.toBeInTheDocument();
});
