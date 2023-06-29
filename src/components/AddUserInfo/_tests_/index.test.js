import React from "react";
import { render as rtlRender,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddUserInfo from "../index";

import { SAMPLE_USERS_DETAILS } from "./sampleUserDetails";

const mockStore = configureStore([]);

const render = component => rtlRender (
  <Provider store = {mockStore({
    users: [],
  })}>
    {component}
     </Provider>
);

const connectedComponent = component => rtlRender (
  <Provider store = {mockStore({
    users: SAMPLE_USERS_DETAILS,
  })}>
    {component}
     </Provider>
);

describe("<AddUserPage />", () => {
  it("not renders user info if users data is empty", () => {
    const { container } = render(<AddUserInfo/>)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("table").length).toBe(0);
  });

  it("renders all user details", () => {
    const { container } = connectedComponent(<AddUserInfo/>)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("table").length).toBe(1);
  });

  it("Count Users(no of users + table head)",  () => {

    connectedComponent(<AddUserInfo/>)

    const users = screen.getByTestId('userTest');
    // eslint-disable-next-line testing-library/no-node-access
    expect(users.querySelectorAll('tr').length).toBe(10+1);
})
});

describe("<AddUserForm />", () => {

it("should render the basic fields", () => {
  connectedComponent(<AddUserInfo/>)
  expect(
    screen.getByRole("heading", { name: "Add User" })
  ).toBeInTheDocument();
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Add User/i })).toBeInTheDocument();
});
});