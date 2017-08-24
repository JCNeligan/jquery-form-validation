function clearInput(input) {
  $(input).data("holder", $(input).attr("placeholder"));

  $(input).focusin(function () {
    $(this).attr("placeholder", "");
  });
  $(input).focusout(function () {
    $(this).attr("placeholder", $(this).data("holder"));
  })

};

function changeMessageStyle(input) {
  if ($(input).hasClass("positve")) {
    ($(input).addClass("negative"));
    ($(input).removeClass("positive"));
  }
  else {
    if ($(input).hasClass("negative")) {
      ($(input).addClass("positve"));
      ($(input).removeClass("negative"));
    }
  }
};

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

// email validation
$("#submitButton").click(function () {
  if ($("#email").val() == "") {
    ($("#emailMessage").html("Email is required"));
    changeMessageStyle("#emailMessage");
  }
  else if (isEmail($("#email").val()) == false) {
    ($("#emailMessage").html("Your email address is not valid"));
    changeMessageStyle("#emailMessage");
  }
  else {
    ($("#emailMessage").html("Success!"));
    changeMessageStyle("#emailMessage");
  }
});

// phone validation
$("#submitButton").click(function () {
  if ($("#phone").val() == "") {
    ($("#phoneMessage").html("Phone is required"));
    ($("#phoneMessage").addClass("negative"));
  }
  else if (isPhone($("#phone").val()) == false) {
    ($("#phoneMessage").html("Must be in the form (xxx)-xxx-xxxx"));
    ($("#phoneMessage").addClass("negative"));
  }
  else {
    ($("#phoneMessage").html("Success!"));
    ($("#phoneMessage").addClass("positive"));
  }
});

// password validation
$("#submitButton").click(function () {
  if ($("#password").val() == "") {
    ($("#passwordMessage").html("Please enter a password"));
    ($("#passwordMessage").addClass("negative"));
  }
  else if ($("#password").val().length < 6) {
    ($("#passwordMessage").html("Password must be at least 6 characters"));
    ($("#passwordMessage").addClass("negative"));
  }
  else if ($("#passwordConfirm").val() == "") {
    ($("#passwordMessage").html("Please confirm password"));
    ($("#passwordMessage").addClass("negative"));
  }
  else if ($("#password").val() != $("#passwordConfirm").val()) {
    ($("#passwordMessage").html("Your passwords do not match"));
    ($("#passwordMessage").addClass("negative"));
  }
  else {
    ($("#passwordMessage").html("Success!"));
    ($("#passwordMessage").addClass("positive"));
  }
});