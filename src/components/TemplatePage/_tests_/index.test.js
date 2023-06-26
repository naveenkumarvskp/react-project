import React from "react";
import { render } from "@testing-library/react";
import TemplatePage from "../index";
describe("<Template Page />", () => {
  it("renders a TemplatePage", () => {
    const { container } = render(<TemplatePage />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("container").length).toBe(1);
  });
});
