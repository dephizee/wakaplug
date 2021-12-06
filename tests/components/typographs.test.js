import React from 'react';
import renderer from 'react-test-renderer';
import { AuthHeaderStyled, AuthLabelStyled, AuthSpanStyled, AuthSubHeaderStyled, AuthTextStyled, LinkStyled, PasswordToggle, SpanStyled } from "./../../components/typographs.style";
import { cleanup, render, screen } from '@testing-library/react'

afterEach(cleanup);


test('Header working', () => {
  const component = renderer.create(
    <AuthHeaderStyled>Facebook</AuthHeaderStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('AuthHeaderStyled renders correctly', () => {
  render(<AuthHeaderStyled>Facebook</AuthHeaderStyled>);

  const AuthHeaderStyledx = screen.getByText('Facebook')
  expect(AuthHeaderStyledx).toBeInTheDocument()
})

test('Sub Header working', () => {
  const component = renderer.create(
    <AuthSubHeaderStyled>Twitter</AuthSubHeaderStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  
});

it('AuthSubHeaderStyled renders correctly', () => {
  render(<AuthSubHeaderStyled>_test_lable</AuthSubHeaderStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})

test('AuthText working', () => {
  const component = renderer.create(
    <AuthTextStyled>LinkedIn</AuthTextStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('AuthTextStyled renders correctly', () => {
  render(<AuthTextStyled>_test_lable</AuthTextStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})

test('AuthLabel working', () => {
  const component = renderer.create(
    <AuthLabelStyled>2go</AuthLabelStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
AuthLabelStyled
it('AuthLabelStyled renders correctly', () => {
  render(<AuthLabelStyled>_test_lable</AuthLabelStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})

test('LinkStyled working', () => {
  const component = renderer.create(
    <SpanStyled>Youtube</SpanStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('SpanStyled renders correctly', () => {
  render(<SpanStyled>_test_lable</SpanStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})

test('LinkStyled working', () => {
  const component = renderer.create(
    <LinkStyled>Tinder</LinkStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('LinkStyled renders correctly', () => {
  render(<LinkStyled>_test_lable</LinkStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})


test('AuthSpan working', () => {
  const component = renderer.create(
    <AuthSpanStyled>Uber</AuthSpanStyled>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('AuthSpan renders correctly', () => {
  render(<AuthSpanStyled>_test_lable</AuthSpanStyled>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})


test('PasswordToggle working', () => {
  const component = renderer.create(
    <PasswordToggle>Bolt</PasswordToggle>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('PasswordToggle renders correctly', () => {
  render(<PasswordToggle>_test_lable</PasswordToggle>);

  const __here = screen.getByText('_test_lable')
  expect(__here).toBeInTheDocument()
})