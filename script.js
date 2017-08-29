function clearInput(input) {
  $(input).data("holder", $(input).attr("placeholder"));

  $(input).focusin(function () {
    $(this).attr("placeholder", "");
  });
  $(input).focusout(function () {
    $(this).attr("placeholder", $(this).data("holder"));
  })

};

function posToNeg(input) {
  ($(input).addClass("negative"));
  ($(input).removeClass("positive"));
};

function negToPos(input) {
  ($(input).addClass("positive"));
  ($(input).removeClass("negative"));
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
    posToNeg("#emailMessage");
  }
  else if (isEmail($("#email").val()) == false) {
    ($("#emailMessage").html("Your email address is not valid"));
    posToNeg("#emailMessage");
  }
  else {
    ($("#emailMessage").html("Success!"));
    negToPos("#emailMessage");
  }
});

// phone validation
$("#submitButton").click(function () {
  if ($("#phone").val() == "") {
    ($("#phoneMessage").html("Phone is required"));
    posToNeg("#phoneMessage");
  }
  else if (isPhone($("#phone").val()) == false) {
    ($("#phoneMessage").html("Must be in the form (xxx)-xxx-xxxx"));
    posToNeg("#phoneMessage");
  }
  else {
    ($("#phoneMessage").html("Success!"));
    negToPos("#phoneMessage");
  }
});

// password validation
$("#submitButton").click(function () {
  if ($("#password").val() == "") {
    ($("#passwordMessage").html("Please enter a password"));
    posToNeg("#passwordMessage");
  }
  else if ($("#password").val().length < 6) {
    ($("#passwordMessage").html("Password must be at least 6 characters"));
    posToNeg("#passwordMessage");
  }
  else if ($("#passwordConfirm").val() == "") {
    ($("#passwordMessage").html("Please confirm password"));
    posToNeg("#passwordMessage");
  }
  else if ($("#password").val() != $("#passwordConfirm").val()) {
    ($("#passwordMessage").html("Your passwords do not match"));
    posToNeg("#passwordMessage");
  }
  else {
    ($("#passwordMessage").html("Success!"));
    negToPos("#passwordMessage");
  }
});