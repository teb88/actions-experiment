import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("this one should fail", () => {
  const linkElement = screen.getByText(/does not exist/i);
  expect(linkElement).toBeInTheDocument();
});
