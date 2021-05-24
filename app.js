// npm global command, comes with node
// npm -- version

// local dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (MAC)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
