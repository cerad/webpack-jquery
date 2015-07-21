var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/manipulation');

require('jquery-ui/jquery-ui');
require('jquery-ui/datepicker');

$('body').append('<p>Success!</p>');

$(function () {
  console.log('Data Picker');
  $(".datepicker").datepicker({
    showOn: "button",
    buttonImage: "{{ asset('assets/images/calendar.gif') }}",
    buttonImageOnly: true,
    dateFormat: "yy-mm-dd",
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true
  });
});
