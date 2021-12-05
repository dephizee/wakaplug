import React from 'react';
import renderer from 'react-test-renderer';
import { AuthHeaderStyled, AuthLabelStyled, AuthSpanStyled, AuthSubHeaderStyled, AuthTextStyled, LinkStyled, PasswordToggle, SpanStyled } from "./../../components/typographs.style";

test('Header working', () => {
  const component = renderer.create(
    <AuthHeaderStyled>Facebook</AuthHeaderStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // tree.props.onMouseEnter();
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // tree.props.onMouseLeave();
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});

test('Sub Header working', () => {
  const component = renderer.create(
    <AuthSubHeaderStyled>Twitter</AuthSubHeaderStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  
});

test('AuthText working', () => {
  const component = renderer.create(
    <AuthTextStyled>LinkedIn</AuthTextStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('AuthLabel working', () => {
  const component = renderer.create(
    <AuthLabelStyled>2go</AuthLabelStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LinkStyled working', () => {
  const component = renderer.create(
    <SpanStyled>Youtube</SpanStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LinkStyled working', () => {
  const component = renderer.create(
    <LinkStyled>Tinder</LinkStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('AuthSpan working', () => {
  const component = renderer.create(
    <AuthSpanStyled>Uber</AuthSpanStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('PasswordToggle working', () => {
  const component = renderer.create(
    <PasswordToggle>Bolt</PasswordToggle>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});