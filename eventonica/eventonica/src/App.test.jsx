import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import { describe, test, expect, afterEach } from 'vitest'; // Add this line

describe('App Component', () => {
  afterEach(cleanup);
  test('matches snapshot', () => {
    //Arrange
    const { container } = render(<App />);
    //Assert
    expect(container.firstChild).toMatchSnapshot();
  });
})