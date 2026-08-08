const readMore = document.querySelector(".read-more");
const details = document.querySelector(".summary-details");

readMore.addEventListener("click", function (event) {
    event.preventDefault();

    if (details.style.display === "none") {
        details.style.display = "block";
        readMore.textContent = "Read less";
    } else {
        details.style.display = "none";
        readMore.textContent = "Read more";
    }
});