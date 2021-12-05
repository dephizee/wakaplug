import React from 'react';
import renderer from 'react-test-renderer';
import { AuthContainerStyled} from "./../../components/containers.style";


test('AuthContainer working', () => {
  const component = renderer.create(
    <AuthContainerStyled>Main container</AuthContainerStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});