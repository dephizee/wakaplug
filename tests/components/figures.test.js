import React from 'react';
import renderer from 'react-test-renderer';
import { ImageStyle, RotatingImage} from "./../../components/figures.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);

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


  it('ImageStyle renders correctly', () => {
    render(<ImageStyle/>);
  
    const imgx = screen.getByAltText('...')
    expect(imgx).toBeInTheDocument()
  })

  it('RotatingImage renders correctly', () => {
    render(<ImageStyle/>);
  
    const rotatingx = screen.getByAltText('...')
    expect(rotatingx).toBeInTheDocument()
  })