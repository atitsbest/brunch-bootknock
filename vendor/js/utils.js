function existy(x) { return x != null };

function cat() {
	var head = _.first(arguments);
	if (existy(head))
		return head.concat.apply(head, _.rest(arguments));
	else
		return [];
}

function checker(/* validators */) {
	var validators = _.toArray(arguments);

	return function (obj) {
		return _.reduce(validators, function (errs, check) {
			if (check(obj))
				return errs
			else
				return _.chain(errs).push(check.message).value();
		}, []);
	};
}

function validator(message, fun) {
	var f = function (/* args */) {
		return fun.apply(fun, arguments);
	};

	f['message'] = message;
	return f;
}

function aMap(obj) {
	return _.isObject(obj);
}

function anArray(obj) {
	return _.isArray(obj);
}

function hasKeys() {
	var KEYS = _.toArray(arguments);

	var fun = function (obj) {
		return _.every(KEYS, function (k) {
			return _.has(obj, k);
		});
	};

	fun.message = cat(["Must have values for keys:"], KEYS).join(" ");
	return fun;
}

function must(/*data, cmd*/) {
	var ps = _.toArray(arguments),
		data = ps[0],
		cmd = checker.apply(checker, _(ps).rest(1)),
		errors = cmd(data);

	if (!_.isEmpty(errors)) {
		throw errors.join(". ");
	}
}


