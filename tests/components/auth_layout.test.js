import React from 'react';
import renderer from 'react-test-renderer';
import { AuthLayoutStyled} from "./../../components/auth_layout.style";

import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);
test('AuthLayoutStyled working', () => {
  const component = renderer.create(
    <AuthLayoutStyled>Bolt</AuthLayoutStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('AuthLayoutStyled renders correctly', () => {
  render(<AuthLayoutStyled>Bolt</AuthLayoutStyled>);

  const layoutx = screen.getByText('Bolt')
  expect(layoutx).toBeInTheDocument()
})