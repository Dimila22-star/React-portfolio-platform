import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../src/components/App'

test('renders portfolio header', () => {
  render(<App />)
  const header = screen.getByText('My Portfolio')
  expect(header).toBeInTheDocument()
})
