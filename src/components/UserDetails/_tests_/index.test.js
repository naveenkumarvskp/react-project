import React from "react";
import { render as rtlRender,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Userdetails from "../index";

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

describe("<User Details />", () => {
  it("renders a user details page", () => {
    const { container } = render(<Userdetails/>)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("user-details").length).toBe(1);
  });

  it("renders all user details", () => {
    const { container } = connectedComponent(<Userdetails/>)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("user-detail").length).toBe(10);
  });

  // it("Onclick on delete button, delete user", async ()  => {
  //   connectedComponent(<Userdetails/>)
  //   // ACT
  // // await userEvent.click(screen.queryAllByText('Delete')[1])
  // // const deleteButton = await screen.findAllByRole("button", {name: /Delete/i})
  // const deleteButton= screen.getAllByRole("button", { name: /Delete/i })[0];
  // userEvent.click(deleteButton);
  //   expect(screen.getAllByRole('button',{name:"Delete"})).toHaveLength(9)
  // });

});
