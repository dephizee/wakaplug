import React from 'react';
import renderer from 'react-test-renderer';
import { ImageStyle, RotatingImage} from "./../../components/figures.style";


test('ImageStyle working', () => {
  const component = renderer.create(
    <ImageStyle/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('RotatingImage working', () => {
    const component = renderer.create(
      <RotatingImage/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });