/**
* jeremysaks:underscore-nudge
* Add new underscore functionality to Meteor underscore.
* @license MIT
*
*/

/**
* Object.is polyfill for non-ES6
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
*/
if (!Object.is) {
  Object.is = function(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  };
}

/**
* Map any newly-added underscore methods to Meteor's underscore.
*/
const uLatest = underscoreLatest._;
let uMeteor = _;
if (Object.is(uMeteor, uLatest)){ return; }
const newMethods = uLatest.omit(uLatest, Object.keys(uMeteor));
uLatest.extend(uMeteor, newMethods);

/**
* A few utility functions track what methods have been added.
* @namespace NUDGE
* @method newKeys
* @method newKeysCount
* @method isNewKey
* @param {String} name of new underscore method to check was added
*/
const newKeys = Object.keys(newMethods);
uMeteor.NUDGE = {
  newKeys(){ return newKeys; },
  newKeysCount(){ return newKeys.length; },
  isNewKey(key){ return newKeys.indexOf(key) !== -1 }
};
uMeteor.VERSION = uMeteor.VERSION + '-patch.' + uLatest.VERSION;