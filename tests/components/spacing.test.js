import React from 'react';
import renderer from 'react-test-renderer';
import { VH} from "./../../components/spacing.style";


test('ButtonStyled working', () => {
  const component = renderer.create(
    <VH/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});