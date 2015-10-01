Tinytest.add("Underscore nudge - find underscore", (test) => {
  test.isNotUndefined(_);
  test.equal(typeof _, 'function');
});

Tinytest.add("Underscore nudge - don't overwrite Meteor's underscore", (test) => {
  // see 'METEOR_CHANGE' at
  // https://github.com/meteor/meteor/blob/devel/packages/underscore/underscore.js
  const obj = { length: 5 };
  test.isNotUndefined(_.each);
  test.isNotUndefined(exports._.each);
  test.isUndefined(_.each(obj, (prop) => { return prop; }));
  test.isNotUndefined(exports._.each(obj, (prop) => { return prop; }))
});

Tinytest.add("Underscore nudge - find new underscore methods", (test) => {
  test.isNotUndefined(_.isMatch);
  const big = { big: true, props: true };
  const small = { props: true };  
  test.isTrue(_.isMatch(big, small));
  test.isNotUndefined(_.create);
  const obj = _.create(Object.prototype, { greeting: "hello" });
  test.isNotUndefined(obj);
  test.equal(obj.greeting, "hello");
});

Tinytest.add("Underscore nudge - utility functions", (test) => {
  test.isNotUndefined(_.NUDGE);
  test.isNotUndefined(_.NUDGE.newKeys());
  test.notEqual(_.NUDGE.newKeysCount(), 0);
  test.isTrue(_.NUDGE.isNewKey('create'));
  test.isFalse(_.NUDGE.isNewKey('each'));
});