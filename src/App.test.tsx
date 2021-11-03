import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const click = (...chars: string[]) => {
  for (const char of chars) {
    fireEvent.click(screen.getByText(char))
  }
}

const expectDisplayed = (text: string) => {
  const display = screen.getByTestId('display')
  expect(display).toHaveValue(text);
}

describe('Calculator', () => {
  it.each([
    ['', '', 'display empty text by default'],
    ['123', '123', 'display number according to all digits that were pushed'],
    ['', '123C', 'display empty text after "C" clicked'],
    ['12+3', '12+3', 'don\'t evaluate before "equal" button pushed'],
    ['12+3+', '12+3++++', 'display at most one operator at the end even if more were pushed'],
    ['12+3/', '12+3+-*/', 'display the last operator, if more than one operator was pushed'],
    ['15', '12+3=', 'add two numbers according to user input'],
    ['9', '12-3=', 'subtract two numbers according to user input'],
    ['36', '12*3=', 'multiply two numbers according to user input'],
    ['4', '12/3=', 'divide two numbers according to user input'],
    ['2.5', '1+2*3/4=', 'perform sequence of computations according to user input'],
  ])('should display "%s" for input "%s" (%s)', (expectedOutput, input) => {
    // given
    render(<App />);
    // when
    click(...input);
    // then
    expectDisplayed(expectedOutput);
  });
});
