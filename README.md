## Underscore Nudge

Underscore Nudge is a simple Meteor package that extends Meteor's core `underscore` package with any new [underscore](http://underscorejs.org/) methods added since the core Meteor version. As of this writing, Meteor's core `underscore` runs a modification of `v1.5.2`. The current version of underscore is `v1.8.3` and contains many useful new methods.

The key point of this package is that any underscore method that already exists on the Meteor core version is *not* overwritten or modified. Meteor has modified underscore to suit the needs of the platform (see Meteor's _.each). Those modifications, and all of the underscore methods that exist on 1.5.2, are preserved without change.

Underscore Nudge simply checks if new underscore methods exist on the `_` global object. If they're missing, Nudge adds them in bulk.

#### Versioning

The package version is pegged to the latest [underscore](https://github.com/jashkenas/underscore).

#### Methods

Underscore Nudge adds more than 20 new methods to Meteor's `underscore` on both server and client:

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

This package makes absolutely no attempt to test whether a new underscore method behaves as expected on the client and/or server. They are added 'as is'. Confirm any methods you use for their intended effects.

#### Utilities

We add a couple of quick, package-specific utility functions to underscore at `_.NUDGE`.
*  `_.NUDGE.newKeys()` returns an array of strings which are the method names the package has added on top of Meteor's version of underscore;
*  `_.NUDGE.newKeysCount()` returns the number of new methods added;
*  `_.NUDGE.isNewKey(key)` returns a Boolean for whether a key is newly added;

In addition, `_.VERSION` is patched to reflect changes.

#### License

MIT