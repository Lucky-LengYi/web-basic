var _ = require('lodash');

function HelperTopic() {

}

HelperTopic.prototype.classify = function (collection) {
    return _.groupBy(collection, function(item) {
        return item.type;
    });
};

HelperTopic.prototype.gatValue = function (userData,data) {
    data.forEach(function (item) {
        if (userData[item.name] !== undefined) {
            item.formatValue(userData[item.name]);
        }
    });
};

HelperTopic.prototype.fractionalStatistics = function (userData,data) {
    var score = 0;
    data.forEach(function (item) {
        if (userData[item.name] !== undefined) {
            score += item.calculationScore(userData[item.name]);
        }
    });
    userData.score = score;
};

module.exports = HelperTopic;
