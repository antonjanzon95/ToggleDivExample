function checkDiv(e) {
  const allDivs = document.querySelectorAll(".aDiv");
  const chosenDiv = e.currentTarget.classList[0];

  allDivs.forEach((div) => {
    div.classList.contains(chosenDiv)
      ? div.classList.remove("hidden")
      : div.classList.add("hidden");
  });
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", checkDiv);
});
