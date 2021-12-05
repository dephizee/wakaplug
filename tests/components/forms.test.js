import React from 'react';
import renderer from 'react-test-renderer';
import { InputField, FormContainer} from "./../../components/forms.style";


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