import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import act from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//npm run watch test
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("it should render Body Component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});
