import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const click = (...chars: string[]) => {
  for (const char of chars) {
    fireEvent.click(screen.getByText(char))
  }
}

const expectDisplayed = (text: string) => {
  const display = screen.getByTestId('display')
  expect(display).toHaveValue(text);
}

describe('verify_pack.Calculator', () => {
  it.each([
    ['', '', 'display empty text by default'],
    ['234', '234', 'display number according to all digits that were pushed'],
    ['', '234C', 'display empty text after "C" clicked'],
    ['34+56', '34+56', 'don\'t evaluate before "equal" button pushed'],
    ['34+56+', '34+56++++', 'display at most one operator at the end even if more were pushed'],
    ['34+56/', '34+56+-*/', 'display the last operator, if more than one operator was pushed'],
    ['90', '34+56=', 'add two numbers according to user input'],
    ['-22', '34-56=', 'subtract two numbers according to user input'],
    ['1904', '34*56=', 'multiply two numbers according to user input'],
    ['0.6071428571428571', '34/56=', 'divide two numbers according to user input'],
    ['9.5', '5+6*3/4=', 'perform sequence of computations according to user input'],
  ])('should display "%s" for input "%s" (%s)', (expectedOutput, input) => {
    // given
    render(<App />);
    // when
    click(...input);
    // then
    expectDisplayed(expectedOutput);
  });
});
