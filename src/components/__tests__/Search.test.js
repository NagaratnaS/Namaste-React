import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import act from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
//npm run watch test
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("it should Search Res List for Pizza Input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  expect(searchButton).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchButton);
  const restaurantCards = screen.getAllByTestId("resCard");
  expect(restaurantCards.length).toBeGreaterThan(0);
  expect(searchInput).toBeInTheDocument();
});
