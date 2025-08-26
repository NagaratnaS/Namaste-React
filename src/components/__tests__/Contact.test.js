import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test case", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //whenever we must check that the component is loaded and present or not then we use this
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact Us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

test("Should load Submit Button inside Contact Us Component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact Us Component", () => {
  //render
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");
  //assert
  expect(inputName).toBeInTheDocument();
});

it("Should load all input boxes inside Contact Us Component", () => {
  render(<Contact />);
  //query
  const inputBoxes = screen.getAllByRole("textbox");
  //console.log(inputBoxes.length)
  //expect(inputBoxes.length).not.toBe(2);
  expect(inputBoxes.length).toBe(2);
});

//it and test both are same, they are just aliases of each other
//can have multiple describe blocks
