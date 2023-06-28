import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../index";

describe("<Footer />", () => {
  it("renders a Footer", () => {
    const { container } = render(<Footer />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("container").length).toBe(1);
  });

  it("renders home page link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
  });
  it("renders AddUser page link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "AddUser" })).toHaveAttribute(
      "href",
      "/adduserinfo"
    );
  });
  it("renders About page link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/aboutus"
    );
  });
});
