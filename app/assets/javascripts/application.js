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

// window.ClientSideValidations.callbacks.element.fail = function(element, message, callback) {
//     callback();
//     if (element.data('valid') !== false) {
//         element.parent().find('.message').hide().effect('highlight', {}, 2000);
//         element.animate( { backgroundColor: "#ffffcc" }, 1000);
//     }
// }
//

var failures = 0

window.ClientSideValidations.callbacks.element.fail = function(element, message, callback) {
    callback();
    failures = failures * 1 + 1;
    if (element.data('valid') !== false) {
        element.parent().addClass('fas fa-exclamation');
        $('#submit').attr('disabled', 'disabled');
    }
}

window.ClientSideValidations.callbacks.element.pass = function(element, callback) {
    failures = failures * 1 - 1;
    element.parent().removeClass('fas fa-exclamation').addClass('fas fa-check');
    if (failures === 0) {
        $('#submit').removeAttr('disabled');
    }
}
