$(document).ready(() => {
  getGeneralSettings();
  updateGeneralSettings();
});

function getGeneralSettings() {
  $('#message-error-site').addClass('d-none');
  $('#message-ok-site').addClass('d-none');
  $.ajax({
    url: settingsUrl,
    type: 'GET',
    success: (data) => {
      $('#allow-signup').prop('checked', data.allow_signup);
      $('#allow-new-member').prop('checked', data.allow_new_member);
      $('#pre-signup-payment-delta').val(data.pre_signup_payment_delta_days);
      $('#signup-payment-delta').val(data.signup_payment_delta_days);
    },
    error: (error) => {
      console.log(error);
      $('#message-error-site').removeClass('d-none');
    }
  });
}

function updateGeneralSettings() {
  $('#form-site').submit((event) => {
    event.preventDefault();
    $.ajax({
      url: settingsUrl,
      type: 'PUT',
      contentType: 'application/json',
      headers: { 'X-CSRFToken': csrftoken },
      mode: 'same-origin',
      data: JSON.stringify({
        allow_signup: $('#allow-signup').is(':checked'),
        allow_new_member: $('#allow-new-member').is(':checked'),
        pre_signup_payment_delta_days: $('#pre-signup-payment-delta').val(),
        signup_payment_delta_days: $('#signup-payment-delta').val(),
      }),
      dataType: 'json',
      success: (_) => {
        $('#message-ok-site').removeClass('d-none');
      },
      error: (error) => {
        console.log(error);
        $('#message-error-site').removeClass('d-none');
      }
    });
  });
}
