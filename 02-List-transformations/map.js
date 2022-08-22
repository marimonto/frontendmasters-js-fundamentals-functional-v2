const _ = require('underscore');

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = (item) => {
    return `brokem ${item}`;
}
const brokenWeapons = _.map(weapons, makeBroken)


// Part 2

_.map = function (list, callback) {
    let storage = []
    _.each(list, function(value, i, list){
        storage.push(callback(value, i, list))
    } )
    return storage;
}

_.map([1, 2, 3], function (val) { return val + 1 })

console.log(_.map([1, 2, 3], function (val) { return val + 1 }))