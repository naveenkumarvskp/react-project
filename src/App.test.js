import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import  { LocationDisplay} from './App.js'
import {MemoryRouter} from 'react-router-dom'


test('rendering add user info page', () => {
  const route = '/adduserinfo'
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  expect(screen.getByText(/adduserinfo/i)).toBeInTheDocument()
})


test('rendering about us page', () => {
  const route = '/aboutus'
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  expect(screen.getByText(/aboutus/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>,
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})