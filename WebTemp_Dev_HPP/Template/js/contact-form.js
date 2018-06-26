(function () {
    var contactFormUtils = {
        isValidEmail: function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },
        clearErrors: function () {
            $('#emailAlert').remove();
            $('#feedbackForm .help-block').hide();
            $('#feedbackForm .form-group').removeClass('has-error');
        },
        clearForm: function () {
            $('#feedbackForm .glyphicon').removeClass('glyphicon-check').addClass('glyphicon-unchecked').css({ color: '' });
            $('#feedbackForm input,textarea').val("");
        },
        addError: function ($input) {
            var parentFormGroup = $input.parents('.form-group');
            parentFormGroup.children('.help-block').show();
            parentFormGroup.addClass('has-error');
        },
        addAjaxMessage: function (msg, isError) {
            $("#feedbackSubmit").after('<div id="emailAlert" class="alert alert-' + (isError ? 'danger' : 'success') + '" style="margin-top: 5px;">' + $('<div/>').text(msg).html() + '</div>');
        }
    };

    $(document).ready(function () {
        if ($("#phone").intlTelInput) {
            $("#phone").intlTelInput({ validationScript: "assets/vender/intl-tel-input/js/isValidNumber.js" });
            $(".intl-tel-input.inside").css('width', '100%');
        }

        $("#feedbackSubmit").click(function () {
           
            var $btn = $(this);
            $btn.button('loading');
            contactFormUtils.clearErrors();
            
            //do a little client-side validation -- check that each field has a value and e-mail field is in proper format
            var hasErrors = false;
            $('#feedbackForm input,#feedbackForm textarea').not('.optional').each(function () {
                var $this = $(this);
                if (($this.is(':checkbox') && !$this.is(':checked')) || !$this.val()) {
                    hasErrors = true;
                    contactFormUtils.addError($(this));
                }
            });
           
            var $email = $('#email');
            
            if (!contactFormUtils.isValidEmail($email.val())) {
              
               hasErrors = true;
               
               contactFormUtils.addError($email);
              
            }
            var $subject = $('#subject').val();
			 var $name=$('#name').val();
             $message = $(message).val();
            var $fromemail = $email.val();
       
            var $phone = $('#phone');
            if ($phone.val() && $phone.intlTelInput && !$phone.intlTelInput("isValidNumber")) {
                hasErrors = true;
                contactFormUtils.addError($phone.parent());
            }
          
            //if there are any errors return without sending e-mail
            if (hasErrors) {
                $btn.button('reset');
                return false;
            }
         
            var test = $("#feedbackForm").serialize();
           
			var body=$name+","+$subject+","+$fromemail+","+$message; 
			 
            $.ajax({
                url: "http://69.63.218.230/PMSmail/Service1.svc/SendMailFeedback/"+body,
                type: "GET", //send it through get method
				async:false,
                data: {content:body },
                success: function (data) {
                    //contactFormUtils.addAjaxMessage(data.message, false);
					contactFormUtils.clearForm();
					 $btn.button('reset');
					 alert("true");
                },
                complete: function (data) {
					
					 $('#feedbackForm').prepend("<div id=\"#emailAlert\"class=\"alert alert-success fade in\" style=\"margin-top: 5px;\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
						$('#feedbackForm')[0].reset();                        
					   $btn.button('reset');
							
                }
				
            });
            //send the feedback e-mail
            /*   $.ajax({
                 type: "POST",
                 url: "Template/form/library/sendmail.php",
                 data: $("#feedbackForm").serialize(),
                 success: function(data) {
                   contactFormUtils.addAjaxMessage(data.message, false);
                   contactFormUtils.clearForm();
                   //get new Captcha on success
                   $('#captcha').attr('src', 'form/library/vender/securimage/securimage_show.php?' + Math.random());
                 },
                 error: function(response) {
                   contactFormUtils.addAjaxMessage(response.responseJSON.message, true);
                 },
                 complete: function() {
                   $btn.button('reset');
                 }
              });  */
            return false;
        });
        $('#feedbackForm input, #feedbackForm textarea').change(function () {
            var checkBox = $(this).siblings('span.input-group-addon').children('.glyphicon');
            if ($(this).val()) {
                checkBox.removeClass('glyphicon-unchecked').addClass('glyphicon-check').css({ color: 'green' });
            } else {
                checkBox.removeClass('glyphicon-check').addClass('glyphicon-unchecked').css({ color: '' });
            }
        });
    });
})();