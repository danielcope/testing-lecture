import React from 'react'
import { render,fireEvent } from '@testing-library/react'
//Import the component that is going to be tested.
import Header from '../Components/Header'


//tests in the React library are invoked by the function it()

it('does not show dropdown when initially mounted', () => {

  const { queryByTestId } = render(<Header />)


  // queryByTestId will come from data-testid in the react component. similar to a classname.
  const dropdown = queryByTestId('dropdown')

  // expect(dropdown).toBeTruthy()
  expect(dropdown).toBeFalsy()

})

it('shows dropdown when hamburger is clicked', () => {
  const { container, getByTestID } = render (<Header/>)

  const hamburger = getByTestID('hamburger-button')

  fireEvent.click(hamburger)

  expect(container.textContent).toContain('Dropdown menu')

})


