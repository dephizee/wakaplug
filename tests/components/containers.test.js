import React from 'react';
import renderer from 'react-test-renderer';
import { AuthContainerStyled} from "./../../components/containers.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);
test('AuthContainer working', () => {
  const component = renderer.create(
    <AuthContainerStyled>Main container</AuthContainerStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('AuthContainerStyled renders correctly', () => {
  render(<AuthContainerStyled>Main container</AuthContainerStyled>);

  const containerx = screen.getByText('Main container')
  expect(containerx).toBeInTheDocument()
})