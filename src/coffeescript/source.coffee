go = (act) -> null

day = "Sat"

switch day
  when "Mon" then go "work"
  when "Tue" then go "relax"
  when "Thu" then go "iceFishing"
  when "Fri", "Sat"
    if day is "Fri"
      go "bingo"
    else
      go "dancing"
  when "Sun" then go "church"
  else go "work"

exports.difference = (a, b) ->
  branch2 = true ? 1 : 0;
  branch3 = true || true || false;
  fn = if true then () -> 1 else () -> 2
  fn();

  a - b;
