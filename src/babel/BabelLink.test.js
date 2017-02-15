import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Link, {difference} from './BabelLink';

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
