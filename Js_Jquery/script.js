function javaScriptTestFunction() {
  let magic = document.querySelector("#magic");
  magic.innerHTML = "Hello Javascript !!!";
}

// JQUERY CODE

$("#btn").click(() => {
  $("#magic").text("Hello JQuery !!!");
});
