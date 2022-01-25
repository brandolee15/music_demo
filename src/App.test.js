import { render, screen } from '@testing-library/react';
import App from './App';
import FaveButton from './components/likeBtn';

describe('App', () => {
  beforeEach(() => {
    render(<FaveButton />)
  })

  test('renders a span with the word Like in it', () => {
    let likeSpan = screen.getByRole("switch")
    expect(likeSpan.textContent).toBe('Like')
  })

  test('changes color of like when clicked', () => {
    let likeSpan = screen.getByRole("switch")
    let initColor = likeSpan.style.color
    let clickedColor = likeSpan.click
    expect(clickedColor).not.toBe(initColor)
  })
})
