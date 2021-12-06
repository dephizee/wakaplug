import React from 'react';
import renderer from 'react-test-renderer';
import { InputField, FormContainer} from "./../../components/forms.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);

test('InputField working', () => {
  const component = renderer.create(
    <InputField/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FormContainer working', () => {
    const component = renderer.create(
      <FormContainer><InputField/></FormContainer>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

it('InputField renders correctly', () => {
  render(<InputField placeholder="write here"/>);

  const inputx = screen.getByPlaceholderText('write here')
  expect(inputx).toBeInTheDocument()
})

it('FormContainer renders correctly', () => {
  render(<FormContainer>Form</FormContainer>);

  const formx = screen.getByText('Form')
  expect(formx).toBeInTheDocument()
})