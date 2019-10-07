import React from "react";
import App from "./App";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});
