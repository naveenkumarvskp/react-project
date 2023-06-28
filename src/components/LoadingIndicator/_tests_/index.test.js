import React from "react";
import { render } from "@testing-library/react";
import { LoadingIndicator } from "../index";
describe("<LoadingIndicator />", () => {
  it("renders a LoadingIndicator", () => {
    const { container } = render(<LoadingIndicator />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("loader").length).toBe(1);
  });
});
