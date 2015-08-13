var _ = require('lodash');

function HelperTopic() {

}

HelperTopic.prototype.classify = function (collection) {
    return _.groupBy(collection, function(item) {
        return item.type;
    });
};

module.exports = HelperTopic;
