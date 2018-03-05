var async = require('async'),

	keystone = require('keystone');
    var Job = keystone.list('Job');

    exports = module.exports = function (req, res) {
	var item = new Job.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	item.getUpdateHandler(req).process(data, function (err) {
		if (err) return res.apiError('error', err);
		res.apiResponse({
			post: item
		});
	});
}
