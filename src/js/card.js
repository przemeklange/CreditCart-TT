let creditCart = document.querySelector("#cartinput");
let mmDD = document.querySelector("#dates");

creditCart.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  let numberAcc = document.querySelector(".number_account_more");
  numberAcc.innerHTML = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  if (numberAcc.textContent.length == 19) {
    creditCart.style.boxShadow = "0 0 10px #52ff78";
    creditCart.style.border = "1px solid #52ff78";
  } else {
    creditCart.style.boxShadow = "0 0 10px #e2eee5";
    creditCart.style.border = "1px solid #e2eee5";
  }
});

mmDD.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{2})/, "$1/")
    .trim();

  let ddshow = document.querySelector(".date_more");
  ddshow.innerHTML = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{2})/, "$1/")
    .trim();

  if (ddshow.textContent.length == 5) {
    mmDD.style.boxShadow = "0 0 10px #52ff78";
    mmDD.style.border = "1px solid #52ff78";
  } else {
    mmDD.style.boxShadow = "0 0 10px #e2eee5";
    mmDD.style.border = "1px solid #e2eee5";
  }
});
