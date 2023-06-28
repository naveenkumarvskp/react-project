import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../index";

describe("<Navbar />", () => {
  it("renders a Navbar", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("nav-bar").length).toBe(1);
  });

  it("renders home page link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute(
      "href",
      "/"
    );
  });
  it("renders AddUser page link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getAllByRole("link", { name: "AddUser" })[0]).toHaveAttribute(
      "href",
      "/adduserinfo"
    );
  });
  it("renders About page link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByRole("link", { name: "About us" })).toHaveAttribute(
      "href",
      "/aboutus"
    );
  });
});
