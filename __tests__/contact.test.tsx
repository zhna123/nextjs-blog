/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Contact from '@/pages/contact'
import userEvent from "@testing-library/user-event";


describe("Contact page", () => {
  it("renders a heading", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading", {name: 'Na Zhao'})
    expect(heading).toBeInTheDocument()
  })

  it("renders form fields", () => {
    render(<Contact />)

    const nameInput = screen.getByRole("textbox", {name: 'name'})
    const emailInput = screen.getByRole("textbox", {name: 'email'})
    const messageArea = screen.getByRole("textbox", {name: 'message'})
    const submitButton = screen.getByRole("button", {name: 'Submit'})
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(messageArea).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it("validates form fields - empty inputs", async () => {
    const user = userEvent.setup();
    render(<Contact />)
    await user.click(screen.getByRole("button", { name: "Submit" }));
    const nameInput = screen.getByRole("textbox", {name: 'name'})
    expect(nameInput).toBeInvalid()
  })

  it("validates form fields - invalid email", async () => {
    const user = userEvent.setup();
    render(<Contact />)
    await user.type(
      screen.getByRole("textbox", { name: "name" }), "Jessica"
    );
    await user.type(
      screen.getByRole("textbox", { name: "email" }), "jes@"
    );
    await user.type(
      screen.getByRole("textbox", { name: "message" }), "hello"
    );
    await user.click(screen.getByRole("button", { name: "Submit" }));
    const nameInput = screen.getByRole("textbox", {name: 'name'})
    const emailInput = screen.getByRole("textbox", {name: 'email'})
    const messageInput = screen.getByRole("textbox", {name: 'message'})

    expect(nameInput).toBeValid()
    expect(emailInput).toBeInvalid()
    expect(messageInput).toBeValid()
  })
})