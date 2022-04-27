// Code from https://stackoverflow.com/questions/16616250/form-submit-with-ajax-passing-form-data-to-php-without-page-refresh
$(function (){

  $('form').on('submit', e => {

    e.preventDefault();
    if(validateFormInputs()){
      $.ajax({
        type: 'post',
        url: 'send.php',
        data: $('form').serialize(),
        success: function () {
          alert('form was submitted');
        }
      }).done(function (data){
        console.log(data);
      });
    } else {
      console.log("There was a problem");
    }
  });
});
