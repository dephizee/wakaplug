import React from 'react';
import renderer from 'react-test-renderer';
import { VH} from "./../../components/spacing.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);



test('ButtonStyled working', () => {
  const component = renderer.create(
    <VH/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('VH renders correctly', () => {
    render(<VH>label</VH>);
  
    const vhx = screen.getByText('label')
    expect(vhx).toBeInTheDocument()
  })