## Underscore Nudge [![Build Status](https://travis-ci.org/JeremySaks/underscore-nudge.svg?branch=master)](https://travis-ci.org/JeremySaks/underscore-nudge)

Underscore Nudge is a simple Meteor package that extends Meteor's core `underscore` package with all the latest methods added to underscore since the core Meteor version.

Meteor's core `underscore` runs a modification of `v1.5.2`. The current version of underscore is [v1.8.3](https://github.com/jashkenas/underscore) and contains many useful new methods.

The key point of this package is that any method that exists on the Meteor core version of underscore is **not** overwritten or modified. Meteor has modified underscore to suit the needs of the platform (*see* Meteor's `_.each`). Those methods and modifications are preserved without change.

Underscore Nudge simply checks if new underscore methods exist. If they're missing, Nudge adds them.

#### Installation

`meteor add jeremysaks:underscore-nudge`

#### Methods

Nudge adds more than 20 new underscore methods to Meteor's `underscore` on both server and client:

* `allKeys`
* `assign`
* `before`
* `constant`
* `create`
* `extendOwn`
* `findIndex`
* `findKey`
* `findLastIndex`
* `includes`
* `isError`
* `isMatch`
* `iteratee`
* `mapObject`
* `matcher`
* `matches`
* `negate`
* `noop`
* `now`
* `partition`
* `property`
* `propertyOf`
* `unzip`

#### Usage

This package makes absolutely no attempt to test whether a method behaves as expected on the client and/or server. They are added 'as is'. Confirm any methods you use for their intended effects.

#### Utilities

We add a couple of quick, package-specific utility functions to underscore at `_.NUDGE`.
*  `_.NUDGE.newKeys()` returns an array of strings which are the method names the package has added on top of Meteor's version of underscore;
*  `_.NUDGE.newKeysCount()` returns the number of new methods added;
*  `_.NUDGE.isNewKey(key)` returns a Boolean for whether a key is newly added;

In addition, `_.VERSION` is patched to reflect changes.

#### License

MIT