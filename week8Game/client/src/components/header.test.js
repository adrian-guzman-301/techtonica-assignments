import Header from './header.js'
import { render, screen } from '@testing-library/react';


//thoughts about writing a test:
  //- i want to test if the header renders the user's name properly
//step 4. use "expect" and toBe methods
  //i. expect inputted username to be 'username'
describe('Render Component', () => {
  it('renders the users name', () => {
//step 1: set up the name
const name = 'red'
//step 2: render a header with the set up name
render(<Header user={name}/>)
//step 3: verify header renders username properly
const header = screen.getByRole('heading')
expect(header).toHaveTextContent(`Welcome to my game, ${name}`)
  });
});