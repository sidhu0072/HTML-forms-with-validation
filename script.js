function validForm() {
  //alert("alert")

  var name = document.custom_form.name;
  var email = document.custom_form.email;
  var password = document.custom_form.password;

  if (name.value == "") {
    name.nextElementSibling.style.display = "block";
    return false;
  } else {
    name.nextElementSibling.style.display = "none";
  }
}
