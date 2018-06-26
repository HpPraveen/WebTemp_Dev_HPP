/* 
 Form validations
 */

//form login validation
jQuery(document).ready(function () {
    jQuery("#login-form").validate({
        password: {
            required: true,
            minlength: 5
        },
        username: {
            required: true,
            email: true
        },
        messages: {
				
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},				
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				}
			}
    });
});


