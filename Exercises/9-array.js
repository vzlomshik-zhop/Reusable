'use strict';

const phonebook = null;

const findPhoneByName = (name) => {for (let n of phonebook) {if (name === n.name) {return n.phone}} return null;};

module.exports = { phonebook, findPhoneByName };
