/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import About from '@/pages/about'


describe("About page", () => {
  it("renders a heading", () => {
    render(<About />)

    const heading = screen.getByRole("heading", {name: 'Na Zhao'})
    expect(heading).toBeInTheDocument()
  })
})