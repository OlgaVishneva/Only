function changeTextAndSize(circle) {
  circle.classList.toggle('active');
  if (circle.classList.contains('active')) {
    circle.style.transform = 'scale(1.1)';
    circle.innerText = `- ${circle.getAttribute('title')}`;
  } else {
    circle.innerText = '+';
  }

}

const listCircle = document.querySelectorAll('.circle')

listCircle.forEach(circle => {
    circle.addEventListener("click", () => changeTextAndSize(circle));
})
