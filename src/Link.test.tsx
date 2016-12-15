import * as React from 'react';
import * as renderer from 'react-test-renderer';
const which = '';
const Link = require('./Link' + which).default;

for (var index = 0; index < 10; index++) {
 test('Link changes the class when hovered' + index, () => {
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
}
