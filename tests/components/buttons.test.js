import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonStyled} from "./../../components/buttons.style";


test('ButtonStyled working', () => {
  const component = renderer.create(
    <ButtonStyled>Hello Guys</ButtonStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});