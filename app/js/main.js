var vms = require('viewmodels/index'),
    dp = require('bindings/ko.datepicker');

// Datepicker init.
_.extend($.fn.datepicker.defaults, {
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true,
    keyboardNavigation: false,
    language: 'de'
});

ko.applyBindings(new vms.IndexVM());
