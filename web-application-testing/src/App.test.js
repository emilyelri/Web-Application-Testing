import React, { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});

test("strikes cannot be greater than 2", () => {
  const strikes = App.strikes;
  expect(strikes).toBeLessThan(3);
});

test("balls cannot be greater than 3", () => {
  const balls = App.balls;
  expect(balls).toBeLessThan(4);
});
