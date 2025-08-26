import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with cart item 0 button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("Login");
  // const cartItems = screen.getByText("Cart - 0 Items");
  // const cartItems = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});

it("Should change login text to logout when user is logged in", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(logOutButton);

  // const loginButton = screen.getByText("Login");
  // const cartItems = screen.getByText("Cart - 0 Items");
  // const cartItems = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
  expect(logOutButton).toBeInTheDocument();
});
