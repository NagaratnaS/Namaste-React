import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResListData.json";
import appStore from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Biryani (5)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBeGreaterThan(0);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBeGreaterThan(0);
  expect(
    screen.getByText("Your cart is empty, Please Add Items to your Cart!!")
  ).toBeInTheDocument();
});
