{ difference } = require './source' 

test 'foo', () ->
    expect(difference 3, 2).toBe 1;
