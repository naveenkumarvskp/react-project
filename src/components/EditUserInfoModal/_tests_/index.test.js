import React from "react";
import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditUserInfoModal from "../index";

import { SAMPLE_USERS_DETAILS } from "./sampleUserDetails";

const mockStore = configureStore([]);

const render = (component) =>
  rtlRender(
    <Provider
      store={mockStore({
        // users: SAMPLE_USERS_DETAILS,
        // isUpdateUserLoading: false,
        // isUserEditNotification: false,
      })}
    >
      {component}
    </Provider>
  );

describe("<EditUserInfoModal />", () => {
  it("renders a edit user info modal", () => {
    const { container } = render(
      <EditUserInfoModal
        userInfo={{
          email: "Sincere@april.biz",
          name: "Leanne Graham",
          phone: "1-770-736-8031 x56442",
          username: "Bret",
          website: "hildegard.org",
        }}
        show
        handleClose={false}
      />
    );
    console.log(container);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName("modal-dialog").length).toBe(1);
  });

  // it("renders all user details", () => {
  //   const { container } = connectedComponent(<EditUserInfoModal />);
  //   // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  //   expect(container.getElementsByClassName("user-detail").length).toBe(10);
  // });

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
