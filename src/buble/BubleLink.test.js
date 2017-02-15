const React = require('react');
const renderer = require('react-test-renderer');
const {Link, difference} = require('./BubleLink');

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree.props.className).toBe('hovered');
});

test('subtracts correctly', () => {
  expect(difference(3, 2)).toBe(1);
});
