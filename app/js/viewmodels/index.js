/**
 * ViewModel für die Index-Datei.
 */
exports.IndexVM = function () {
    var self = this;

    self.datum = ko.observable(new Date());

    self.tues = function () {
        alert('Habe es getan!r');
    };
}
