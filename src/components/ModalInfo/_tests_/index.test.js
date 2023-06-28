import React from "react";
import { render, screen } from "@testing-library/react";
import ModalInfo from "../index";
describe("<ModalInfo />", () => {
  it("renders a user name", () => {
    render(<ModalInfo userInfo={{
      email: "Sincere@april.biz",
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      username: "Bret",
    }}
    show
    />);
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
  });
  it("renders a user email", () => {
    render(<ModalInfo userInfo={{
      email: "Sincere@april.biz",
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      username: "Bret",
    }}
    show
    />);
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
  });
  it("renders a user phone", () => {
    render(<ModalInfo userInfo={{
      email: "Sincere@april.biz",
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      username: "Bret",
    }}
    show
    />);
    expect(screen.getByText("1-770-736-8031 x56442")).toBeInTheDocument();
  });
});
