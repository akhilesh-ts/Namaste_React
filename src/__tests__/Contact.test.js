import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../page/Contact";
import "@testing-library/jest-dom";
import { act } from "react";

describe("it should render the contact page with contact form", () => {
  it("should run the contact us heading", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("should run the get in touch form", () => {
    render(<Contact />);

    const inputBox = screen.getAllByTestId("name");

    expect(inputBox.length).toBe(1);
  });

  it(" if i click the submit button at that time change the form to success component ", async () => {
    render(<Contact />);

    const submitButton = screen.getByRole("button", { name: "Send Message" });

    expect(submitButton).toBeInTheDocument();

    const nameInput = screen.getByTestId("name");

    const emailInput = screen.getByTestId("email");

    const messageInput = screen.getByTestId("message");

    fireEvent.change(nameInput, { target: { value: "akhilesh" } });

    fireEvent.change(emailInput, { target: { value: "akhil@gmail.com" } });

    fireEvent.change(messageInput, {
      target: { value: "this is a just test message" },
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    const success = screen.getByTestId("success-image");
    expect(success).toBeInTheDocument();
  });
});
