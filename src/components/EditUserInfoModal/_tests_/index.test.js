import React from "react";
import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditUserInfoModal from "../index";

import { SAMPLE_USERS_DETAILS } from "./sampleUserDetails";

const mockStore = configureStore([]);

const render = (component) =>
  rtlRender(
    <Provider
      store={mockStore({
        users: SAMPLE_USERS_DETAILS,
        isUpdateUserLoading: false,
        isUserEditNotification: false,
      })}
    >
      {component}
    </Provider>
  );

describe("<EditUserInfoModal />", () => {
  it("renders a edit user info modal", () => {
    render(
      <EditUserInfoModal
        userInfo={{
          email: "Sincere@april.biz",
          name: "Leanne Graham",
          phone: "1-770-736-8031 x56442",
          username: "Bret",
          website: "hildegard.org",
        }}
        show
        handleClose={jest.fn()}
      />
    );
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("phone")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
