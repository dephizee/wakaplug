import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonStyled} from "./../../components/buttons.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);

test('ButtonStyled working', () => {
  const component = renderer.create(
    <ButtonStyled>Hello Guys</ButtonStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


it('ButtonStyled renders correctly', () => {
  render(<ButtonStyled>Heading</ButtonStyled>);

  const heading = screen.getByText('Heading')
  expect(heading).toBeInTheDocument()
})