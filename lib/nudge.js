/**
* jeremysaks:underscore-nudge
* Add new underscore functionality to Meteor underscore.
* @license MIT
*
*/

/**
* Map any newly-added underscore methods to Meteor's underscore.
*/
const uLatest = exports._;
let uMeteor = _;
if (Object.is(uMeteor, uLatest)){ return; }
const newMethods = uLatest.omit(uLatest, Object.keys(uMeteor));
const newKeys = Object.keys(newMethods);
uLatest.extend(uMeteor, newMethods);

/**
* A few utility functions track what methods have been added.
* @namespace NUDGE
* @method newKeys
* @method newKeysCount
* @method isNewKey
* @param {String} name of new underscore method to check was added
*/
uMeteor.NUDGE = {
  newKeys(){ return newKeys; },
  newKeysCount(){ return newKeys.length; },
  isNewKey(key){ return newKeys.indexOf(key) !== -1 }
};
uMeteor.VERSION = uMeteor.VERSION + '-patch.' + uLatest.VERSION;