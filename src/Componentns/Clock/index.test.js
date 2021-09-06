import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Clock } from "./index";

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

it("should render Clock", () => {
  act(() => {
    render(
      <Clock
        time={185}
        handleClock={() => {}}
        running={false}
        handleHalf={() => {}}
      />,
      container
    );
  });

  expect(container.querySelector(".MuiTypography-h3").textContent).toEqual(
    "03:05"
  );

  expect(
    container.querySelector(".MuiButton-containedSecondary .MuiButton-label")
      .textContent
  ).toEqual("Start");
});

it("should render AppCard information in C", () => {
  act(() => {
    render(
      <Clock
        time={185}
        handleClock={() => {}}
        running={true}
        handleHalf={() => {}}
      />,
      container
    );
  });

  expect(
    container.querySelector(".MuiTypography-h3").textContent
  ).toEqual("03:05");

  expect(
    container.querySelector(".MuiButton-containedSecondary .MuiButton-label")
      .textContent
  ).toEqual("Stop");
});
