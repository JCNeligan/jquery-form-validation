function clearInput(input) {
  $(input).data("holder", $(input).attr("placeholder"));

  $(input).focusin(function () {
    $(this).attr("placeholder", "");
  });
  $(input).focusout(function () {
    $(this).attr("placeholder", $(this).data("holder"));
  })

}

clearInput("#email");
clearInput("#phone");
clearInput("#password");
clearInput("#passwordConfirm");

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhone(phone) {
  var regex = /\(?\d{3}\)?-?\d{3}-?\d{4}/;
  return regex.test(phone);
}






$("#submitButton").click(function () {

  if ($("#email").val() == "") {
    ($("#emailMessage").html("Email is required"));
  }
  else if (isEmail($("#email").val()) == false) {
    ($("#emailMessage").html("Your email address is not valid"));
  }
  else {
    ($("#emailMessage").html("Success!"));
  }
});

$("#submitButton").click(function () {
  if ($("#phone").val() == "") {
    ($("#phoneMessage").html("Phone is required"));
  }
  else if ($.isNumeric($("#phone").val()) == false) {
    ($("#phoneMessage").html("Your phone number is not numeric"));
  }
  else if (isPhone($("#phone").val()) == false) {
    ($("#phoneMessage").html("Must be in the form (xxx)-xxx-xxxx"))
  }
  else {
    ($("#phoneMessage").html("Success!"));
  }
});



  // if ($("#password").val() == "") {
  //   fieldMissing += "<br/>Password";
  // }

  // if ($("#passwordConfirm").val() == "") {
  //   fieldMissing += "<br/>Confirm Password";
  // }

  // if (fieldMissing != "") {
  //   errorMessage += "<p>The following field(s) are missing:" + fieldMissing + "</p>";
  // }





//   if ($("#password").val() != $("#passwordConfirm").val()) {
//     ($("#passwordMessage").html("<p>Your passwords do not match</p>"));
//   }


// });