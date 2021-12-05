import React from 'react';
import renderer from 'react-test-renderer';
import { AuthLayoutStyled} from "./../../components/auth_layout.style";


test('AuthLayoutStyled working', () => {
  const component = renderer.create(
    <AuthLayoutStyled>Bolt</AuthLayoutStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});