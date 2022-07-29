let numbers = document.querySelectorAll('.rating');
let subBtn = document.querySelector(".subBtn");

numbers.forEach (btn => {
  btn.addEventListener("click", i => {
    numbers.forEach(num => {
      num.classList.remove("rating-active")
    });
    btn.classList.add("rating-active")
  })

});

subBtn.addEventListener("click", () => {
  let currentBtn = document.querySelector(".rating-active");
  if (!currentBtn) {
    alert("No Rating Selected");
  } else {
    console.log(currentBtn.innerHTML);
  }
})
