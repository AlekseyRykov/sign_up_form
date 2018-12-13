// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require rails.validations
//= require_tree .
//= require jquery-ui

var errors = 0;

window.ClientSideValidations.callbacks.form.fail = function() {
    $('#submit').attr('disabled', 'disabled');
};

window.ClientSideValidations.callbacks.element.fail = function(element, message, callback) {
    if (element.parent().hasClass('fas fa-check')) element.unwrap();
    callback();
    errors = errors + 1;
    if (element.data('valid') !== false) {
        element.parent().addClass('fas fa-exclamation');
        $('#submit').attr('disabled', 'disabled');
    }
};

window.ClientSideValidations.callbacks.element.pass = function(element, callback) {
    callback();
    if (errors > 0) errors = errors - 1;
    element.wrap( "<div class='fas fa-check'></div>" );
    if (errors === 0) $('#submit').removeAttr('disabled');
};
