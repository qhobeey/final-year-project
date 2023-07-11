function toggleDropdownDisplayed(id) {
  if (id.nextElementSibling.style.display !== "none") {
    id.nextElementSibling.style.display = "none";
  } else {
    id.nextElementSibling.style.display = "block";
  }
}

function closeProductDisplay(id) {
  id.parentElement.style.display = "none";
}
