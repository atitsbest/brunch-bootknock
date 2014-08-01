ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
		//initialize datepicker with some optional options
        var options = allBindingsAccessor().datepickerOptions || {},
            value = valueAccessor();
        $(element).datepicker(options);
        
        

        if (ko.isObservable(value)) {
            var update = function (event) {
                // JHERUNT: This blur event is needed, as the datepicker itself is not resetted when the input field is 
                // blanked out! This way, it is possible to check for the event that no date value is given. 
                if (_.isEmpty($(this).val())) {
                    if (value() !== undefined) { value(null); } // kein Text => kein Datum übergeben. 
                }
                else {
                    var dp = $(element).data("datepicker");
                    value(dp.getDate());
                }
            };

            // when a user changes the date, update the view model
            ko.utils.registerEventHandler(element, "blur", update);
            ko.utils.registerEventHandler(element, "change", update);
        }

		// handle disposal (if KO removes by the template binding)
		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			$(element).datepicker("remove");
		});

		ko.bindingHandlers.validationCore.init(element, valueAccessor, allBindingsAccessor);
	},
	update: function (element, valueAccessor) {
	    var value = ko.utils.unwrapObservable(valueAccessor()),
            dp = $(element).data("datepicker"),
	        current = _.isUndefined(dp) ? undefined : dp.getDate();
        if (!_.isUndefined(value) && value - current !== 0) {
            dp.setDate(value);
        }
	}
};
ko.bindingHandlers.endDate = {
    
    update: function (element, valueAccessor) {
        
        var value = ko.utils.unwrapObservable(valueAccessor()),
            current = $(element).datepicker({
                
                    endDate: value
                
            }); 
       
    }
};
