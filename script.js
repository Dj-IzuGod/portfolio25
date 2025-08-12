window.addEventListener("load", function () {
  // Wait for the entire page to load
  setTimeout(function () {
    document.querySelector(".loader-wrapper").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 2000); // 1 second delay to ensure smooth transition (adjust to as needed)
});
